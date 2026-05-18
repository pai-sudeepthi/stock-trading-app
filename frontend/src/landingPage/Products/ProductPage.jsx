import Hero from "./Hero";
import SectionTab from "./SectionTab";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <SectionTab />
      <div className="pt-5">
        <p className="text-center fs-4 fw-normal mt-5 mb-5">
          Want to know more about our technology stack? Check out the &nbsp;
          <a href="/" className="fs-4 fw-semibold" style={{ color: "#387ed1" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
      <Universe />
    </>
  );
}
