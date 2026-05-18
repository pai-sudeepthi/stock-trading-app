import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  }

  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="Media/homeHero.png" alt="Hero image" className="mb-5" />
        <div className="mt-5 mb-5">
          <h1>Invest in Everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            many more.
          </p>
          <button className="btn btn-primary" onClick={handleSignup}>
            SignUp Now
          </button>
        </div>
      </div>
    </div>
  );
}
