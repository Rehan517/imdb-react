import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="nav__container">
        <Link to={"/"}>
          <h2 className="nav__logo">456Movies</h2>
          </Link>
          <ul className="nav__links">
            
            <Link to={"/"}>
            <li>
              <div href="" className="nav__link link__hover--effect">
                Home
              </div>
              </li>
              </Link>
            
            <li>
              <a href="" className="nav__link nav__link--primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
