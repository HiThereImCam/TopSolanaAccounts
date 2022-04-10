import React, { useEffect, useState, useReducer } from "react";
import "./App.css";

import { getSolanaAccounts, AccountInfo } from "./util/getSolanaAccounts";

type reducerState = {
  loading: boolean;
  error: string;
};

function App() {
  const [accountData, setAccountData] = useState<Array<AccountInfo>>([]);
  const [state, setState] = useReducer(
    (state: reducerState, newState: reducerState) => ({
      ...state,
      ...newState,
    }),
    { loading: true, error: "" }
  );

  let getAccounts = async () => {
    let solanaAccountsString: any = await fetch(
      "http://localhost:8080/solana/accounts"
    );
    let solanaAccounts = await solanaAccountsString.json();
    if (solanaAccounts) {
      setAccountData(solanaAccounts);
      setState({ loading: false, error: "" });
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  // let { loading, error } = state;

  return (
    <div className="App">
      {!!accountData && accountData.length > 0 ? (
        <div>
          <pre>{JSON.stringify(accountData, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
}

export default App;
