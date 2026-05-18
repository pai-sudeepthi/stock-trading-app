import "/public/css/AwardText.css";

export default function AwardText() {
  return (
    <div className="container ">
      <h1 className="mt-3">Largest Stock broker in India</h1>
      <p className="mt-5">
        2+ million Zerodha clients contribute to over 15% of all retail order
        volumes in India daily by trading and investing in :
      </p>
      <div className="row mt-4 mb-4">
        <div className="col-6">
          <ul>
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Stocks & IOPs</li>
            <li>Direct Mutual Funds</li>
            <li>Bonds and Go</li>
          </ul>
        </div>
      </div>
      <img src="Media/pressLogos.png" alt="Press-Logo" />
    </div>
  );
}
