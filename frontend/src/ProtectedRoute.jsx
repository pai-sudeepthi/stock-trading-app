import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/api/auth/verify",
          { withCredentials: true }
        );

        if (res.data.status) {
          setIsAuth(true);
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return isAuth ? children : <Navigate to="/login" />;
}