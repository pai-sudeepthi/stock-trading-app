import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { set } from "mongoose";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3002/api/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    navigate("/dashboard");
  } catch (err) {
    setMessage(err.response.data.message);
    setEmail("");
    setPassword("");
  }
  };

  return <div className="container">
    <div className="row mb-5 mt-3">
      {/* Alert message */}
      <div className="mt-3">
            {message && (
              <div
                className={"alert alert-danger alert-dismissible fade show"}  
                role="alert"
                style={{position:"fixed", width:"80%"}}
              >
                {message}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                ></button>
              </div>
            )}
          </div>
          {/* Alert message end */}
      <h1
        className="p-3 fs-3 mt-5 text-center fw-medium"
        style={{ color: "#424242" }}
      >
        Open a free demat and trading account online
      </h1>
      <h2 className="mb-5 fs-5 text-center fw-normal" style={{ color: "#757575" }}>
        Start investing brokerage free and join a community of 1.6+ crore investors and traders
      </h2>
      <div
        className="row mt-5 p-5 text-justify lh-lg"
        style={{ fontSize: "1rem" }}
      >
        <div className="col px-5 text-center">
          <img
            src="\Media\account_open.svg"
            alt="Open Account"
          />
        </div>
        <div className="col pl-5">
          <h1 className="fs-3 fw-medium" style={{ color: "#424242" }}>Login now</h1>
          <h2 className="fs-6 fw-medium mt-2" style={{ color: "#a2a2a2" }}>Or track your existing application</h2>
          <form onSubmit={handleLogin} className="needs-validation mt-4" novalidate>
            <div className="mb-3">
              <input type="email" value={email}onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" required/>
               <div className="invalid-feedback">
                Please enter your email address.
               </div>  
            </div>
            <div>
              <input type="password" id="inputPassword5" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" aria-describedby="passwordHelpBlock" placeholder="Enter Your Password" required/>
            </div>

            <div className="mt-4 d-flex justify-content-between">
             <button className="btn btn-primary" type="submit">Login</button>
             <Link to="/signup" className="btn btn-link">Don't have an account? Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;
}
