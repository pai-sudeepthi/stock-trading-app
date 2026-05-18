import LinkTag from "../Home/LinkTag";

export default function RightSection({ ImageURL, Title, Description, Link }) {
  const linkItems = Array.isArray(Link) ? Link : [];
  const linkElements = linkItems.map((text, idx) => (
    <div className="col" key={text + idx}>
      <LinkTag text={text} />
    </div>
  ));

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-5 p-5">
          <h5 className="fs-3 mb-4">{Title}</h5>
          <p className="mb-4 lh-lg">{Description}</p>
          <div className="row mb-4">{linkElements}</div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 d-flex align-items-center">
          <img
            src={ImageURL}
            className="img-fluid w-100 rounded-start"
            alt="picture"
            style={{ objectFit: "contain", maxHeight: "420px" }}
          />
        </div>
      </div>
    </div>
  );
}
