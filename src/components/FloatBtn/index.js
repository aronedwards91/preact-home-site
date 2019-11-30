import { h } from "preact";
import style from "./style.css";
import { useState } from "preact/hooks";

const FloatBtn = () => {
  const [clicked, setClicked] = useState(false);
  console.log("cl:", clicked);
  return (
    <div onClick={() => setClicked(!clicked)}>
      <div class={style.button}>
        <div class={style.button_text}>Hi</div>
      </div>
    </div>
  );
};

export default FloatBtn;
