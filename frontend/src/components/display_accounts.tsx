import { useState } from "react";
import useToggle from "../hooks/useToggle";
import { AccountInfo } from "../util/getSolanaAccounts";
import convertLamports from "../util/convertLamports";

const DisplayAccounts = (props: { solanaAccounts: AccountInfo[] }) => {
  const { solanaAccounts } = props;
  // const [displayUSD, setDisplayUSD] = useState(false);
  const [displayUSD, toggleDisplayUSD] = useToggle();

  // let toggleUSD = () => {
  //   setDisplayUSD(!displayUSD);
  // };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Public Account Information</th>
            {!displayUSD ? (
              <th onClick={toggleDisplayUSD}>SOL</th>
            ) : (
              <th onClick={toggleDisplayUSD}>USD</th>
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
