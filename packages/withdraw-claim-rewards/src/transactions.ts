import chalk from 'chalk';
import { PopulatedTransaction } from '@ethersproject/contracts';
import { RelayerParams } from 'defender-relay-client';
import { downloadContractsBlob } from '@pooltogether/v5-utils-js';
import {
  getWithdrawClaimRewardsTx,
  printAsterisks,
  printSpacer,
} from '@pooltogether/v5-autotasks-library';
import { Relayer } from 'defender-relay-client';

export const populateTransaction = async (params, readProvider): Promise<PopulatedTransaction> => {
  let populatedTx: PopulatedTransaction;

  try {
    const contracts = await downloadContractsBlob(params.chainId);
    populatedTx = await getWithdrawClaimRewardsTx(contracts, readProvider, params);
  } catch (e) {
    console.error(e);
  }

  return populatedTx;
};

export const processPopulatedTransaction = async (
  event: RelayerParams,
  populatedTx: PopulatedTransaction,
) => {
  const relayer = new Relayer(event);

  try {
    if (populatedTx) {
      printAsterisks();
      console.log(chalk.blue(`4. Sending transactions ...`));
      printSpacer();

      let transactionSentToNetwork = await relayer.sendTransaction({
        data: populatedTx.data,
        to: populatedTx.to,
        gasLimit: 200000,
      });
      console.log('TransactionHash:', transactionSentToNetwork.hash);
    } else {
      console.log('WithdrawRewards: No transactions populated');
    }
  } catch (error) {
    throw new Error(error);
  }
};
