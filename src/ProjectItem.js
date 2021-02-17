import React from "react";
import "./ProjectItem.css";

export default function ProjectItem (props) {
  return (
    <li className="box">
      <div className="container">
        <img className="image" src={props.image} />
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h3>{props.stack}</h3>
      </div>
    </li>
  )
}