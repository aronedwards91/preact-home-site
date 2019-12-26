import { h } from "preact";
import style from "./style";

export const MobileShow = props => (
  <div class={style.onlyMobile}>{props.children}</div>
);
export const MobileHide = props => (
  <div class={style.hideMobile}>{props.children}</div>
);