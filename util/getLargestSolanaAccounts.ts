import * as solanaWeb3 from "@solana/web3.js";

let solanaClusterRPCEndpoint: string = process.env
  .SOLANA_CLUSTER_RPC_ENDPOINT as string;

const getLargestSolanaAccounts = () => {
  let establishConnection = solanaWeb3.Connection;
  let newSolanaConnection = new establishConnection(solanaClusterRPCEndpoint);
};

export default getLargestSolanaAccounts;
