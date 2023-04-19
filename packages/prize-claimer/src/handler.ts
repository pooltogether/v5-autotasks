import { Relayer, RelayerParams } from "defender-relay-client";
import { DefenderRelayProvider, DefenderRelaySigner } from "defender-relay-client/lib/ethers";
import {
  testnetContractsBlob as contracts,
  claimerHandleClaimPrize,
  getChunkedFnCalls,
  getContract,
} from "@pooltogether/v5-autotasks-library";

export async function handler(event: RelayerParams) {
  console.clear();

  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, { speed: "fast" });
  const relayer = new Relayer(event);

  const chainId = Number(process.env.CHAIN_ID);
  const feeRecipient = String(process.env.FEE_RECIPIENT);

  const block = await provider.getBlock("latest");

  const contractsVersion = {
    major: 1,
    minor: 0,
    patch: 0,
  };
  const claimer = getContract("Claimer", chainId, provider, contracts, contractsVersion);

  try {
    const populatedTxs = await claimerHandleClaimPrize(contracts, feeRecipient, {
      chainId,
      provider: signer,
    });

    if (populatedTxs.length > 0) {
      const fnCalls: string[] = [];
      for (const populatedTx of populatedTxs) {
        fnCalls.push(populatedTx.data);
      }

      const estimateMulticallGas = (fnCalls: string[]) => claimer.estimateGas.multicall(fnCalls);

      const chunkedFnCalls = await getChunkedFnCalls(block, fnCalls, estimateMulticallGas);
      for (const fnCalls of chunkedFnCalls) {
        const multicallTxPopulated = await claimer.populateTransaction.multicall(fnCalls);

        const gasLimit = block.gasLimit.sub(block.gasLimit.div(5)).toNumber();
        console.log(gasLimit);

        let transactionSentToNetwork = await relayer.sendTransaction({
          data: multicallTxPopulated.data,
          to: multicallTxPopulated.to,
          gasLimit,
        });
        console.log("TransactionHash:", transactionSentToNetwork.hash);
      }
    } else {
      console.log("Claimer: No transactions populated");
    }
  } catch (error) {
    throw new Error(error);
  }
}
