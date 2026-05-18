import LinkTag from "./LinkTag";

export default function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img
            src="Media/education.svg"
            alt="Education-SVG"
            style={{ width: "70%" }}
            className="p-3"
          />
        </div>
        <div className="col-6 p-3">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basic to advanced trading.
          </p>
          <LinkTag text={"Versity"} />
          <p className="mt-4">
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <LinkTag text={"Trading Q&A"} />
        </div>
      </div>
    </div>
  );
}
