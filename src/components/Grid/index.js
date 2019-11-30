import { h } from "preact";
import style from "./style";
import FloatBtn from "../FloatBtn";

const Grid = () => (
  <div class={style.grid} >
    <div class={style.childSm1}>
      <FloatBtn />
    </div>
    <div class={style.childSm2}>2</div>
    <div class={style.childSm3}>3</div>
    <div class={style.childSm4}>4</div>
    <div class={style.childSm5}>5</div>
    <div class={style.childSm6}>6</div>
    <div class={style.childBG}>Big</div>
  </div>
);

export default Grid;
