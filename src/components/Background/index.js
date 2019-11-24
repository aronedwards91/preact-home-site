import { h } from "preact";
import style from "./style.css";

const Background = () => (
  <div class={style.bgContainer}>
    <div class={style.background}>
      <div class={style.backgroundWater}></div>
    </div>
    <svg class={style.svgHide}>
      <filter id="turbulence" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          id="sea-filter"
          numOctaves="3"
          seed="2"
          baseFrequency="0.02 0.05"
        ></feTurbulence>
        <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
        <animate
          xlinkHref="#sea-filter"
          attributeName="baseFrequency"
          dur="60s"
          keyTimes="0;0.3;0.4;0.6;0.8;1"
          values="0.02 0.06;0.03 0.07;0.04 0.08;0.035 0.075;0.03 0.07;0.02 0.06"
          repeatCount="indefinite"
        />
      </filter>
    </svg>
  </div>
);

export default Background;
