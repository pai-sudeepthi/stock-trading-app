export default function Hero() {
  return (
    <div style={{ backgroundColor: "#f5e4e8" }}>
      <div className="container p-3">
        <div className="row flex justify-content-between align-items-center mt-5 mb-5">
          <h1 style={{ width: "20rem" }}>Support Portal</h1>
          <button
            className="btn btn-primary"
            style={{ height: "3rem", width: "8rem" }}
          >
            My Ticket
          </button>
        </div>
        <div className="input-group mb-5">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}
