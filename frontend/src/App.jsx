import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import HomePage from "./landingPage/Home/HomePage";
import AboutPage from "./landingPage/About/AboutPage";
import PricingPage from "./landingPage/Pricing/PricingPage";
import ProductPage from "./landingPage/Products/ProductPage";
import SignUp from "./landingPage/SignUp/SignUp";
import Login from "./landingPage/SignUp/Login";
import SupportPage from "./landingPage/Support/SupportPage";
import Footer from "./landingPage/Footer";
import Navbar from "./landingPage/Navbar";
import NotFound from "./landingPage/NotFound";
import Home from "./dashboard/Home";


function Layout() {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
