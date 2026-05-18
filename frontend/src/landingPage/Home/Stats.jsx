import StatsText from "./StatsText";
import LinkTag from "./LinkTag";

export default function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-4">
          <StatsText />
        </div>
        <div className="col-6 p-4">
          <img
            src="Media/ecosystem.png"
            alt="Ecosystem-image"
            style={{ width: "100%" }}
            className="mt-5"
          />
          <div className="d-flex justify-content-center">
            <LinkTag text={"Explore our products"} />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <LinkTag text={"Try Kite demo"} />
          </div>
        </div>
      </div>
    </div>
  );
}
