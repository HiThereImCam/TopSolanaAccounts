const LAMPORT_TO_SOLANA = 0.000000001;
const convertLamports = (lamports: number, displayUSD: boolean) => {
  // sol to usd needs to be dynamic
  let solanaValue = lamports * LAMPORT_TO_SOLANA;

  if (displayUSD) {
    let usd = solanaValue * 112.01;
    return usd;
  }

  return solanaValue;
};

export default convertLamports;
