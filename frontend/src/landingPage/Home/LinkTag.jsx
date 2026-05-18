export default function LinkTag({ text }) {
  return (
    <a
      href="/"
      style={{ textDecoration: "none", fontSize: "1.15rem", color: "blue" }}
    >
      {text}&nbsp;&nbsp;
      <i className="fa-solid fa-arrow-right-long"></i>
    </a>
  );
}
