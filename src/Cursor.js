import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./Cursor.css";


export default function Cursor () {
const [position, setPosition] = useState({x: 0, y:0});
const [hidden, setHidden] = useState(false);

useEffect(() => {
  addEventListener();
  return () => removeEventListener();
}, []);

const addEventListener = () => {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseenter", onMouseEnter);
  document.addEventListener("mouseleave", onMouseLeave);
};
const removeEventListener = () => {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseenter", onMouseEnter);
  document.removeEventListener("mouseleave", onMouseLeave);
}
const onMouseMove = (e) => {
  setPosition({x: e.clientX + 20 , y: e.clientY + 20})
}

const onMouseLeave = () => {
  setHidden(true);
}
const onMouseEnter = () => {
  setHidden(false);
}
const cursorClasses = classNames(
  "ufo", { "ufo--hidden": hidden}
)

  return (
    <main>
      <section className="animation">
        <img className={cursorClasses} src="/img/ufo.png" style={{left:`${position.x}px`, top:`${position.y}px`}}/>
      </section>
    </main>
  )
}