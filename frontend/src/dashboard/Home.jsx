import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import "../../public/css/dashboard.css";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/api/auth/verify",
          {
            withCredentials: true,
          }
        );

        setUser(res.data.user);

      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="dashboard-wrapper">
      {/* <div class="alert alert-success alert-dismissible fade show" role="alert" style={{position:"fixed",top:"2rem",left:"7rem",zIndex:"999",width:"80%",textAlign:"center"}}>
        Welcome {user}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
      </div> */}
      <TopBar user={user} />
      <Dashboard user={user} />
    </div>
  );
};

export default Home;
