import PricingBox from "./PricingBox";
import LinkTag from "./LinkTag";

export default function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India.Flat fees and no hidden charges.
          </p>
          <LinkTag text={"See Pricing"} />
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col border p-4">
              <PricingBox
                price={0}
                text={"Free equity delivery and direct mutual funds"}
              />
            </div>
            <div className="col border p-4">
              <PricingBox price={20} text={"Intraday and F&O trades"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
