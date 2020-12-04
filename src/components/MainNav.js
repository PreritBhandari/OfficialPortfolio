import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBlog,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

function MainNav() {
  return (
    <div className="Topnavbar">
      <div className="brand">
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>
      <Link className="btn">
        <span></span>
        <span></span>
        <span></span>
      </Link>
      <div class="Topmenu">
        <NavLink className="first" exact to="/Blog">
          <FontAwesomeIcon icon={faBlog} size="lg" />
        </NavLink>
        <NavLink exact to="/Contact">
          <FontAwesomeIcon icon={faAddressBook} size="lg" />
        </NavLink>
      </div>
    </div>
  );
}

export default MainNav;
