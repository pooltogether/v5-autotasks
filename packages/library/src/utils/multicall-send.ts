// import { signERC2612Permit } from 'eth-permit'
import { BigNumber, PopulatedTransaction } from 'ethers'
import { chunkArray } from '@utils/chunkArray'

export const useSubmitUpdateDelegationTransaction = (
) => {
    const fnCalls: string[] = []

      const populatedTx = await claimer.populateTransaction.createDelegation(
      )
      fnCalls.push(populatedTx.data)

    twabDelegatorContract.multicall(fnCalls)
  }

  const { data: block, isFetched: isBlockFetched } = useLatestBlock(chainId)

  /**
   *
   * @param estimateGas
   * @param fnCalls
   * @returns
   */
  const getChunkedFnCalls = async (
    fnCalls: string[],
    estimateGas: (fnCalls: string[]) => Promise<BigNumber>
  ) => {
    if (fnCalls.length === 1) {
      return [fnCalls]
    }

    // Get 80% of the gas limit
    const gasLimit: BigNumber = block.gasLimit.sub(block.gasLimit.div(5))

    // Data limit is 32kb
    const dataByteLimit = 32000

    let numOfTransactions = 1
    let isValidChunks = false
    let chunkedFnCalls: string[][]
    let isError = false
    do {
      try {
        chunkedFnCalls = chunkArray<string>(fnCalls, numOfTransactions)

        const estimateGasPromises: Promise<BigNumber>[] = chunkedFnCalls.map((fnCalls) =>
          estimateGas(fnCalls)
        )
        const settledGasEstimates = await Promise.allSettled(estimateGasPromises)

        const isValidDataSizes = chunkedFnCalls.reduce((isValid, fnCalls) => {
          return isValid && new Blob(fnCalls).size < dataByteLimit
        }, true)

        const isValidGasSizes = settledGasEstimates.reduce((isValid, result) => {
          if (result.status === 'rejected') {
            return false
          } else {
            return gasLimit.gt(result.value)
          }
        }, true)

        if (isValidGasSizes && isValidDataSizes) {
          isValidChunks = true
        } else {
          if (numOfTransactions >= 50) {
            isError = true
          }
          numOfTransactions++
        }
      } catch (e) {
        if (numOfTransactions >= 50) {
          isError = true
        }
        numOfTransactions++
      }
    } while (!isValidChunks && !isError)

    if (isError) {
      throw new Error('Too many transactions')
    }

    return chunkedFnCalls
  }

      const fnCalls: string[] = []

      let transactionsToSend: SendTransactionOptions[] = []
      const estimateMulticallGas = (fnCalls: string[]) =>
        twabDelegatorContract.estimateGas.multicall(fnCalls)

        
        const chunkedFnCalls = await getChunkedFnCalls(fnCalls, estimateMulticallGas)
        chunkedFnCalls.map((fnCalls) => {
          transactionsToSend.push({
            name: t('updateDelegations'),
            callTransaction: async () =>
              twabDelegatorContract.multicall(fnCalls, {
                // Need to explicitly set the gas limit for metamask
                gasLimit: block.gasLimit.sub(block.gasLimit.div(5))
              }),
          })
        })
      }

      return transactionsToSend
