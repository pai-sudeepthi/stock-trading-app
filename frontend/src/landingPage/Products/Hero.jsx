import LinkTag from "../Home/LinkTag";

export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center mb-5 mt-5">
        <h1 className="fs-3 mt-5">Zerodha Products</h1>
        <h2 className="fs-4 fw-normal mt-2">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p className="fs-5 mt-2 mb-5">
          Check out our <LinkTag text={"investment offerings"} />
        </p>
      </div>
    </div>
  );
}
