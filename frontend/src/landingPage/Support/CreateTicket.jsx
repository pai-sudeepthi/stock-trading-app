import DropdownTab from "./DropdownTab";

export default function CreateTicket() {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col-9">
          <DropdownTab />
        </div>
        <div className="col-3">
          <div className="p-4 fs-4" style={{ backgroundColor: "#f7f8d9ff" }}>
            <ul>
              <li>
                <a href="/">Offer for sale (OFS) - 2026</a>
              </li>
              <li>
                <a href="/">Current Takeovers and Delisting – January 2026</a>
              </li>
            </ul>
          </div>

          <div className="row mt-4 border p-3 ml-4">
            <div>
              <h1 className="fs-5 mb-4">Quick Links</h1>
            </div>
            <hr />
            <div lassName="mt-5 border p-3">
              <ol>
                <li>
                  <a href="/">Track account opening</a>
                </li>
                <li>
                  <a href="/">Track segment activation</a>
                </li>
                <li>
                  <a href="/">Intraday margins</a>
                </li>
                <li>
                  <a href="/">Kite user manual</a>
                </li>
                <li>
                  <a href="/">Learn how to create a ticket</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
