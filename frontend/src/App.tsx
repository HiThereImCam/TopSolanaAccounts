import React, { useEffect, useState, useReducer } from "react";
import "./App.css";

import { getSolanaAccounts, AccountInfo } from "./util/getSolanaAccounts";
import DisplayAccounts from "./components/display_accounts";
import mockSolanaAccounts from "./tests/mock_solana_accounts";

type reducerState = {
  loading: boolean;
  error: string;
};

function App() {
  const [largestSolanaAccounts, setLargestSolanaAccounts] = useState<
    Array<AccountInfo>
  >([]);
  const [state, setState] = useReducer(
    (state: reducerState, newState: reducerState) => ({
      ...state,
      ...newState,
    }),
    { loading: true, error: "" }
  );

  let getAccounts = async () => {
    // let solanaAccountsRes: any = await fetch(
    //   "http://localhost:8080/solana/accounts"
    // );
    // let solanaAccounts = await solanaAccountsRes.json();
    let solanaAccounts: any = mockSolanaAccounts();
    if (solanaAccounts) {
      setLargestSolanaAccounts(solanaAccounts);
      setState({ loading: false, error: "" });
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  let { loading, error } = state;

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <DisplayAccounts solanaAccounts={largestSolanaAccounts} />
      )}
    </div>
  );
}

export default App;

/**

 {!!largestSolanaAccounts && accountData.length > 0 ? (
        <div>
          <pre>{JSON.stringify(accountData, null, 2)}</pre>
        </div>
      ) : null}




 */
