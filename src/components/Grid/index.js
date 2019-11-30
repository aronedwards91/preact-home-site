import { h } from "preact";
import style from "./style";
import FloatBtn from "../FloatBtn";

const Grid = () => (
  <div class={style.grid}>
    <div class={style.childSm1}>
      <FloatBtn text="Welcome" />
    </div>
    <div class={style.childSm2}>
      <FloatBtn text="Skills" />
    </div>
    <div class={style.childSm3}>
      <FloatBtn text="Experience" />
    </div>
    <div class={style.childSm4}>
      <FloatBtn text="Demo" />
    </div>
    <div class={style.childSm5}>
      <FloatBtn text="Book List" />
    </div>
    <div class={style.childSm6}>
      <FloatBtn text="Welcome" />
    </div>
    <div class={style.childBG}>Big</div>
  </div>
);

export default Grid;
