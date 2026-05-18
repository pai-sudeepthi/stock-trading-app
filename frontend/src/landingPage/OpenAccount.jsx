import { useNavigate } from "react-router-dom";

export default function OpenAccount() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container p-5">
      <div className="row text-center">
        <div className="mt-5 mb-5">
          <h1 className="mb-3">Open a Zerodha account</h1>
          <p className="mb-3">
            Modern platforms and apps, &#8377;0 investments,and flat &#8377;20
            intraday and F&O trades.
          </p>
          <button className="btn btn-primary px-4" onClick={handleSignup}>SignUp Now</button>
        </div>
      </div>
    </div>
  );
}
