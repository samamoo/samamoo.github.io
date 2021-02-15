import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <a href="#">
              <img className="about" src="/img/uranus.png" />
              ABOUT
            </a>
          </li>
          <li>
            <a href="#">
              <img className="about" src="/img/jupiter.png" />
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#">
              <img className="about" src="/img/earth-globe.png" />
              OTHER WORKS
            </a>
          </li>
          <li>
            <a href="#">
              <img className="about" src="/img/planet.png" />
              RESUME
            </a>
          </li>
          <li>
            <a href="#">
            <img className="about" src="/img/neptune.png"/>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
