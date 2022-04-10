import { useState } from "react";
import { AccountInfo } from "../util/getSolanaAccounts";
import convertLamports from "../util/convertLamports";

const DisplayAccounts = (props: { solanaAccounts: AccountInfo[] }) => {
  const { solanaAccounts } = props;
  const [displayUSD, setDisplayUSD] = useState(false);

  let toggleUSD = () => {
    setDisplayUSD(!displayUSD);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Public Account Information</th>
            {!displayUSD ? (
              <th onClick={() => toggleUSD()}>SOL</th>
            ) : (
              <th onClick={() => toggleUSD()}>USD</th>
            )}
          </tr>
          {solanaAccounts.map((account) => (
            <tr key={`${account.address}`}>
              <td>{account.address}</td>
              <td>{convertLamports(account.lamports, displayUSD)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAccounts;
