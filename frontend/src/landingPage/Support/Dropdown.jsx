import "/public/css/Dropdown.css";

export default function Dropdown({ icon, headLine, MenuItem }) {
  let menuItems = Array.isArray(MenuItem) ? MenuItem : [];
  let listItems = menuItems.map((item, idx) => (
    <li key={idx}>
      <a className="dropdown-item" href="#">
        {item}
      </a>
    </li>
  ));
  return (
    <div className="dropdown-center">
      <button
        className="btn btn-secondary"
        id="dropdown-id"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="inner-div text-start">
          <div className="div-icon">{icon}</div>
          <div className="div-text">{headLine}</div>
          <i className="fa-solid fa-angle-down down-icon "></i>
        </div>
      </button>
      <ul className="dropdown-menu">{listItems}</ul>
    </div>
  );
}
