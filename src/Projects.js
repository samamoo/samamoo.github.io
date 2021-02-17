import React from "react";
import ProjectItem from "./ProjectItem";
import data from "./projectsDb.json";
import "./Projects.css";

export default function Projects () {
  return (
    <main className="projectsPage">
      <ul className="projectsList">
        {data.map((val) => {
          return(
            <ProjectItem
            title={val.title}
            description={val.description}
            stack={val.stack}
            image={val.image} />
          )
        })}
      </ul>
    </main>
  )
}