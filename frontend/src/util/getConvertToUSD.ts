const REACT_APP_GET_SOLANA_PRICE_CONVERSION: string = process.env
  .REACT_APP_GET_SOLANA_PRICE_CONVERSION as string;

export interface SolanaPriceToUSD {
  price: number;
  last_updated: string;
}

export const getConvertToUSD = async () => {
  let solanaToUSDRes = null;
  try {
    solanaToUSDRes = await fetch(`${REACT_APP_GET_SOLANA_PRICE_CONVERSION}`);
  } catch (e: any) {
    throw new Error(e);
  }

  if (solanaToUSDRes) {
    let solanaToUSD: SolanaPriceToUSD = await solanaToUSDRes.json();
    return solanaToUSD.price;
  }
};
