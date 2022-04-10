// import * as solanaWeb3 from "@solana/web3.js";
const GET_SOLANA_ACCOUNTS_URL: string = process.env
  .GET_SOLANA_ACCOUNTS_URL as string;

export type AccountInfo = {
  address: object;
  lamports: number;
};

export const getSolanaAccounts = async () => {
  try {
    let solanaAccountsString = await fetch(
      "http://localhost:8080/solana/accounts"
    );
    let solanaAccounts = await solanaAccountsString.json();
    return solanaAccounts;
  } catch (e) {
    throw Error();
  }
};
