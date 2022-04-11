import * as solanaWeb3 from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

let solanaClusterRPCEndpoint: string = process.env
  .SOLANA_CLUSTER_RPC_ENDPOINT as string;

/**
 *
 * @returns array of solana accounts and lamport values
 *
 * this value needs to be cached to prevent being rate-limited
 */

const getLargestSolanaAccounts = async () => {
  let establishConnection = solanaWeb3.Connection;
  let newSolanaConnection = new establishConnection(solanaClusterRPCEndpoint);
  let largestSolanaAccountsObj = null;
  try {
    largestSolanaAccountsObj = await newSolanaConnection.getLargestAccounts();
  } catch (e: any) {
    throw new Error(e);
  }

  if (largestSolanaAccountsObj) {
    return largestSolanaAccountsObj.value;
  }
};

export default getLargestSolanaAccounts;
