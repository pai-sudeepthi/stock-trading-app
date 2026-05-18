import Charges from "./Charges";

export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center mb-5 mt-5 border-bottom pb-5">
        <h1 className="fs-2 mt-5">Charges</h1>
        <h2 className="fs-4 fw-normal mt-2 text-muted">
          List of all charges and taxes
        </h2>
      </div>
      <div className="row py-5 px-3 mt-5 text-center">
        <div className="col-4 p-4">
          <Charges
            imgUrl={"/Media/pricingEquity.svg"}
            title="Free equity delivery"
            description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
          />
        </div>
        <div className="col-4 p-4">
          <Charges
            imgUrl={"/Media/intradayTrades.svg"}
            title="Intraday and F&O trades"
            description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
          />
        </div>
        <div className="col-4 p-4">
          <Charges
            imgUrl={"/Media/pricingEquity.svg"}
            title="Free direct MF"
            description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
          />
        </div>
      </div>
    </div>
  );
}
