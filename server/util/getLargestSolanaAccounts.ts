import * as solanaWeb3 from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

let solanaClusterRPCEndpoint: string = process.env
  .SOLANA_CLUSTER_RPC_ENDPOINT as string;

// obj w/ data and lastRefreshed: timestamp
const CACHED_VALUE = {};

/**
 *
 * @returns array of solana accounts and lamport values
 *
 * this value needs to be cached to prevent being rate-limited
 */

const getLargestSolanaAccounts = async () => {
  let establishConnection = solanaWeb3.Connection;
  let newSolanaConnection = new establishConnection(solanaClusterRPCEndpoint);

  let largestSolanaAccountsObj = await newSolanaConnection.getLargestAccounts();

  if (largestSolanaAccountsObj) {
    return largestSolanaAccountsObj.value;
  }
};

export default getLargestSolanaAccounts;
