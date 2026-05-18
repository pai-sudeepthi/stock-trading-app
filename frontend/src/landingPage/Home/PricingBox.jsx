export default function PricingBox({ price, text }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="mb-3">&#8377;{price}</h1>
      <p>{text}</p>
    </div>
  );
}
