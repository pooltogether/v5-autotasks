import { providers, BigNumber } from "ethers";

export function chunkArray<T>(arr: T[], chunks: number) {
  const chunkedArray: T[][] = [];
  const chunkSize = Math.ceil(arr.length / chunks);

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }

  return chunkedArray;
}

/**
 *
 * @param estimateGas
 * @param fnCalls
 * @returns
 */
export const getChunkedFnCalls = async (
  block: providers.Block,
  fnCalls: string[],
  estimateGas: (fnCalls: string[]) => Promise<BigNumber>
) => {
  if (fnCalls.length === 1) {
    return [fnCalls];
  }

  // Get 80% of the gas limit
  const gasLimit: BigNumber = block.gasLimit.sub(block.gasLimit.div(5));

  // Data limit is 32kb
  const dataByteLimit = 32000;

  let numOfTransactions = 1;
  let isValidChunks = false;
  let chunkedFnCalls: string[][];
  let isError = false;
  do {
    try {
      chunkedFnCalls = chunkArray<string>(fnCalls, numOfTransactions);

      const estimateGasPromises: Promise<BigNumber>[] = chunkedFnCalls.map((fnCalls) =>
        estimateGas(fnCalls)
      );
      const settledGasEstimates = await Promise.allSettled(estimateGasPromises);

      const isValidDataSizes = chunkedFnCalls.reduce((isValid, fnCalls) => {
        return isValid && new Blob(fnCalls).size < dataByteLimit;
      }, true);

      const isValidGasSizes = settledGasEstimates.reduce((isValid, result) => {
        if (result.status === "rejected") {
          return false;
        } else {
          return gasLimit.gt(result.value);
        }
      }, true);

      if (isValidGasSizes && isValidDataSizes) {
        isValidChunks = true;
      } else {
        if (numOfTransactions >= 50) {
          isError = true;
        }
        numOfTransactions++;
      }
    } catch (e) {
      if (numOfTransactions >= 50) {
        isError = true;
      }
      numOfTransactions++;
    }
  } while (!isValidChunks && !isError);

  if (isError) {
    throw new Error("Too many transactions");
  }

  return chunkedFnCalls;
};
