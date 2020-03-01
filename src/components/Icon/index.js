import { h } from "preact";
import style from "./style";

// current opt:  icon-waves, icon-clear, icon-close, icon-keyboard_arrow_up1, icon-keyboard_arrow_down

const Icon = ({name = 'keyboard_arrow_down'}) => (
  <span class={`${style.icon} ${style[`icon-${name}`]}`}/>
);

export default Icon;
