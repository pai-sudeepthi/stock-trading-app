export default function Team() {
  return (
    <div className="container">
      <div className="row mb-5 mt-3 border-top">
        <h1
          className="p-3 fs-3 text-center my-5 fw-medium"
          style={{ color: "#424242" }}
        >
          People
        </h1>
      </div>
      <div
        className="row mt-5 p-5 text-justify lh-lg"
        style={{ fontSize: "1rem" }}
      >
        <div className="col px-5 text-center">
          <img
            src="\Media\nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-4 fs-5" style={{ color: "#424242" }}>
            Nithin Kamath
          </h4>
          <h5 className="mt-3 text-muted fs-6">Founder, CEO</h5>
        </div>
        <div className="col pl-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;&nbsp;
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            &nbsp; /&nbsp;
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            &nbsp; /&nbsp;
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
