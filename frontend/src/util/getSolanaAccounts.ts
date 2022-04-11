// import * as solanaWeb3 from "@solana/web3.js";
const REACT_APP_GET_SOLANA_ACCOUNTS: string = process.env
  .REACT_APP_GET_SOLANA_ACCOUNTS as string;

export type AccountInfo = {
  address: object;
  lamports: number;
};

export const getSolanaAccounts = async () => {
  try {
    let solanaAccountsRes = await fetch(`${REACT_APP_GET_SOLANA_ACCOUNTS}`);
    let solanaAccounts = await solanaAccountsRes.json();
    return solanaAccounts;
  } catch (e) {
    return "Internal server error";
  }
};
