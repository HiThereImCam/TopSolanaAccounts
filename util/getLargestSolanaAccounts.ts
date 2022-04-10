import * as solanaWeb3 from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

let solanaClusterRPCEndpoint: string = process.env
  .SOLANA_CLUSTER_RPC_ENDPOINT as string;

const getLargestSolanaAccounts = async () => {
  let establishConnection = solanaWeb3.Connection;
  console.log("endpoint: ", solanaClusterRPCEndpoint);
  let newSolanaConnection = new establishConnection(solanaClusterRPCEndpoint);

  try {
    let largestSolanaAccountsObj =
      await newSolanaConnection.getLargestAccounts();
    let largestSolanaAccounts = largestSolanaAccountsObj.value;
    return largestSolanaAccounts;
  } catch (e) {
    throw Error();
  }
};

export default getLargestSolanaAccounts;
