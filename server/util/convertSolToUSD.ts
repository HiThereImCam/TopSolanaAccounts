import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

export interface SolanaPriceToUSD {
  price: number;
  last_updated: string;
}

const CMC_KEY: string = process.env.COINMARKETCAP_API_KEY as string;

export const convertSolToUSD = async () => {
  let solanaPriceRes = await fetch(
    "https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=1&id=5426",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Cmc_pro_api_key": `${CMC_KEY}`,
      },
    }
  );

  let solanaPrice: any = await solanaPriceRes.json();
  return solanaPrice.data.quote.USD as SolanaPriceToUSD;
};
