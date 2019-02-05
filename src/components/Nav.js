import React from "react";
// import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="https://stephenhornbeek.com/">Navbar</a>
  <a className="navbar-brand" href="https://stephenhornbeek.com/">Search</a>

  <a className="navbar-brand" href="https://stephenhornbeek.com/">Saved</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

</nav>
  );
}

export default Nav;
