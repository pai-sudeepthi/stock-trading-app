export default function Charges({ imgUrl, title, description }) {
  return (
    <div className="charge">
      <img
        src={imgUrl}
        alt={title}
        style={{ width: "250px", height: "200px" }}
      />
      <h3 className="mb-4 mt-3">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
}
