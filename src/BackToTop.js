import React, { useState, useEffect } from 'react';
import "./BackToTop.css";

export default function BackToTop({showBelow}) {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth`})
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      { show &&
      <img id="rocket" src="/img/rocket.png" onClick={handleClick}/>
      }
    </div>
  )
}