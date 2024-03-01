import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Главная страница</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
