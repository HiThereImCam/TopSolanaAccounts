const LAMPORT_TO_SOLANA = 0.000000001;
const convertLamports = (
  lamports: number,
  displayUSD: boolean,
  currPrice: number
) => {
  // sol to usd needs to be dynamic
  let solanaValue = lamports * LAMPORT_TO_SOLANA;

  if (displayUSD) {
    let usd = solanaValue * currPrice;
    return usd.toFixed(2);
  }

  return solanaValue.toFixed(2);
};

export default convertLamports;
