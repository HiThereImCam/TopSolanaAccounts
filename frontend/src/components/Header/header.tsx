import "./header.css";
const Header = (props: { currPrice: number }) => {
  const { currPrice } = props;
  return (
    <div className="header">
      <span>
        Current Solana to USD conversion brought to you by CoinMarketCap
      </span>
      <span>
        Select <strong>SOL</strong> to convert to <strong>USD</strong>. Select
        again to convert back to <strong>SOL</strong>
      </span>
      <span>Conversion rates: </span>
      <ul className="unordered-list">
        <li>
          1 <strong>SOL</strong> = ${currPrice.toFixed(2)} <strong>USD</strong>
        </li>
      </ul>
    </div>
  );
};

export default Header;
