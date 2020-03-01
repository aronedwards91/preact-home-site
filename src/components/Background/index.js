import { h } from "preact";
import style from "./style";
import { MobileShow, MobileHide } from "../Mobile";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
import { useState } from "preact/hooks";

const Background = () => {
  const [stopAnimation, setAnimation] = useState(
    typeof window !== "undefined" && window.location.hostname.includes("0.0.0")
  );
  const animateBtn = () => {
    console.log("pressed");
    setAnimation(!stopAnimation);
  };

  return (
    <div class={style.bgContainer}>
      <MobileShow>
        <div class={style.backgroundSVG} />
      </MobileShow>
      <MobileHide>
        <div class={style.background}>
          <div class={style.backgroundWater}></div>
        </div>
        <AnimationSwitch onPress={animateBtn} isOn={!stopAnimation} />
        {!stopAnimation ? (
          <svg class={style.svgHide}>
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                id="sea-filter"
                numOctaves="3"
                seed="2"
                baseFrequency="0.02 0.05"
              ></feTurbulence>
              <feDisplacementMap
                scale="20"
                in="SourceGraphic"
              ></feDisplacementMap>
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
        ) : null}
      </MobileHide>
    </div>
  );
};

const animationText = "Turn off \n animation";
const animationIsOffText = "Turn on \n animation";
const AnimationSwitch = ({ onPress, isOn }) => (
  <div class={style.switchHolder} onClick={onPress}>
    <Tooltip text={isOn ? animationText : animationIsOffText}>
      <div class={style.switchBtn}>
        <Icon name="waves" />
      </div>
    </Tooltip>
  </div>
);

export default Background;
