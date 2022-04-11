import useToggle from "../../hooks/useToggle";
import { AccountInfo } from "../../util/getSolanaAccounts";
import convertLamports from "../../util/convertLamports";
import "./display_accounts.css";

const DisplayAccounts = (props: {
  solanaAccounts: AccountInfo[];
  currPrice: number;
}) => {
  const { solanaAccounts, currPrice } = props;
  const [displayUSD, toggleDisplayUSD] = useToggle();

  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <th>Public Address Information</th>
            {!displayUSD ? (
              <th onClick={toggleDisplayUSD}>SOL</th>
            ) : (
              <th onClick={toggleDisplayUSD}>USD</th>
            )}
          </tr>
          {solanaAccounts.map((account) => (
            <tr key={`${account.address}`}>
              <td>{account.address}</td>
              <td>
                {convertLamports(account.lamports, displayUSD, currPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAccounts;
