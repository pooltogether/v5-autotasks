import { Relayer } from 'defender-relay-client';
import { DefenderRelayProvider } from 'defender-relay-client/lib/ethers';
import { downloadContractsBlob } from '@pooltogether/v5-utils-js';
import { yieldVaultHandleMintRate } from '@pooltogether/v5-autotasks-library';

export async function processTransactions(event, params) {
  const { chainId } = params;

  const relayer = new Relayer(event);
  const writeProvider = new DefenderRelayProvider(event);

  const contracts = await downloadContractsBlob(chainId);
  const transactionsPopulated = await yieldVaultHandleMintRate(contracts, {
    chainId,
    writeProvider,
  });

  if (transactionsPopulated.length > 0) {
    for (const transactionPopulated of transactionsPopulated) {
      try {
        let transactionSentToNetwork = await relayer.sendTransaction({
          data: transactionPopulated.data,
          to: transactionPopulated.to,
          gasLimit: 70000,
        });
        console.log('TransactionHash:', transactionSentToNetwork.hash);
      } catch (error) {
        throw new Error(error);
      }
    }
  } else {
    console.log('YieldVault: Transactions not populated');
  }
}
