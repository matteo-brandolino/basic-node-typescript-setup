import { ethers } from 'ethers'
import StringStore from '../../app/src/contracts/StringStore.json'

export let eventsFromBlockChain : Events;

interface Events {
    signer: string,
    balance : string,
    StringContract: any
}

//connection to blockchain to listen events
export const listenToEvents = async () : Promise<boolean> => {
  const provider = new ethers.providers.JsonRpcProvider('');
  const networkId = '1630834114853';

  const signer = await provider.getSigner().getAddress();
  const balanceBigNumber = await provider.getBalance(signer);
  const balance = ethers.utils.formatEther(balanceBigNumber)

  const StringContract : any = new ethers.Contract(
      StringStore.networks[networkId].address,
      StringStore.abi,
      provider
  )
  //listening for PaymentDone
  StringContract.on('Log',  (payer: string) : void => {
      console.log(`from ${payer}`)
  })

  eventsFromBlockChain = {
    signer,
    balance,
    StringContract
  }

  return true 
}
