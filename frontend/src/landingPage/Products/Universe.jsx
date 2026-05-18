import { useNavigate } from "react-router-dom";

export default function Universe() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  } 

  return (
    <div className="container text-center my-5 pt-4">
      <h1 className="fs-4 my-4">The Zerodha Universe</h1>
      <p className="mb-5 fs-6 pb-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src="Media/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            style={{ height: "55px", width: "70%" }}
          />
          <p
            className="lh-base mt-3"
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Our asset management venture <br /> that is creating simple and
            transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img
            src="Media/sensibullLogo.svg"
            alt="Sensibull Logo"
            style={{ height: "55px", width: "70%" }}
          />
          <p
            className="lh-base mt-3"
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4">
          <img
            src="Media/goldenpiLogo.png"
            alt="GoldenPi Logo"
            style={{ height: "55px", width: "70%" }}
          />
          <p
            className="lh-base mt-3"
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Investment research platform <br />
            that offers detailed insights on stocks,
            <br /> sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src="Media/streakLogo.png"
            alt="Streak Logo"
            style={{ height: "55px", width: "70%" }}
          />
          <p
            className="lh-base mt-3"
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img
            src="Media/smallcaseLogo.png"
            alt="Small case Logo"
            style={{ height: "55px", width: "70%" }}
          />
          <p
            className="lh-base mt-3"
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img
            src="Media/dittoLogo.png"
            alt="Ditto Logo"
            style={{ height: "55px", width: "70%" }}
          />
          <p
            className="lh-base mt-3"
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
      </div>
      <button className="btn btn-primary px-5 py-2 fs-5 fw-semibold my-5" onClick={handleSignup}>
        Sign Up for free
      </button>
    </div>
  );
}
