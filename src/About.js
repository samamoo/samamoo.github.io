import React, { useEffect, useRef } from "react";
import "./About.css";
import { TweenMax, Power2 } from 'gsap';

export default function About () {
  let leftAnimate = useRef(null);
  let fadeIn1 = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(leftAnimate, 1.5, {y: "100%"}, {y: "0%", ease: Power2.easeOut})
    TweenMax.fromTo(fadeIn1, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut, delay: 1})
  }, []);
  return (
    <main>
      <div className="biotext" ref={el => {fadeIn1 = el}}>
        <h1 className="title" >OR-BIT ABOUT ME!</h1>
        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div class="button-holder">
          <a class="btn" href="https://www.canva.com/design/DAERqDB5coE/xKwtC5gbBmRD_ClfMplaUg/view?utm_content=DAERqDB5coE&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank">RESUME</a>
        </div>
      </div>
      {/* <div className="capsule" ref={el => {leftAnimate = el}}>
        <div className="cap"></div>
        <img id="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQHGcsjvm92RiA/profile-displayphoto-shrink_200_200/0/1609202193871?e=1619049600&v=beta&t=4-EM0czab9XYWY5Rx_Kh40zMcCN5AHnRwsZD0bsikEw" />
      </div> */}
      <div className="rocket" ref={el => {leftAnimate = el}}>
        <img  id="rocketship" src="https://github.com/samamoo/samamoo.github.io/blob/master/public/img/rocket.png?raw=true"/>
        <img id="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQHGcsjvm92RiA/profile-displayphoto-shrink_200_200/0/1609202193871?e=1619049600&v=beta&t=4-EM0czab9XYWY5Rx_Kh40zMcCN5AHnRwsZD0bsikEw" />
      </div>
    </main>
  )
}