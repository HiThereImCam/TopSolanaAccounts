import React, { useEffect, useState, useReducer, Fragment } from "react";
import "./App.css";

import { getSolanaAccounts, AccountInfo } from "./util/getSolanaAccounts";
import { getConvertToUSD } from "./util/getConvertToUSD";
import DisplayAccounts from "./components/DisplayAccounts/display_accounts";
import Header from "./components/Header/header";

type reducerState = {
  loading: boolean;
  error: string;
};

function App() {
  const [state, setState] = useReducer(
    (state: reducerState, newState: reducerState) => ({
      ...state,
      ...newState,
    }),
    { loading: true, error: "" }
  );

  const [largestSolanaAccounts, setLargestSolanaAccounts] = useState<
    Array<AccountInfo>
  >([]);

  const [currSolanaToUSD, setCurrSolanaToUSD] = useState<number>(0);

  let getSolanaData = async () => {
    let solanaAccounts: any = await getSolanaAccounts();
    let solanaToUSDPrice: any = await getConvertToUSD();
    if (Array.isArray(solanaAccounts) && typeof solanaToUSDPrice !== "string") {
      setLargestSolanaAccounts(solanaAccounts);
      setCurrSolanaToUSD(solanaToUSDPrice);
      setState({ loading: false, error: "" });
    } else if (!Array.isArray(solanaAccounts)) {
      setState({ loading: false, error: solanaAccounts });
    } else {
      setState({ loading: false, error: solanaToUSDPrice });
    }
  };

  useEffect(() => {
    getSolanaData();
  }, []);

  let { loading, error } = state;

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Fragment>
          <Header currPrice={currSolanaToUSD} />
          <DisplayAccounts
            solanaAccounts={largestSolanaAccounts}
            currPrice={currSolanaToUSD}
          />
        </Fragment>
      )}
    </div>
  );
}

export default App;
