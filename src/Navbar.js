import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <Link to="/">
          <li>
            <img className="planet" src="/img/earth-globe.png" />
              HOME
          </li>
        </Link>
        <Link to="/about">
          <li>
            <img className="planet" src="/img/jupiter.png" />
              ABOUT ME
          </li>
        </Link>
        <li>
          <a href="#">
          <img className="planet" src="/img/uranus.png" />
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#">
            <img className="planet" src="/img/planet.png" />
            RESUME
          </a>
        </li>
        <li>
          <a href="#">
          <img className="planet" src="/img/neptune.png"/>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
