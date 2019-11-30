import { h } from "preact";
// import style from "./style.css";
import lessStyle from './lessStyle';
import { useState } from "preact/hooks";

const FloatBtn = ({text}) => {
  const [clicked, setClicked] = useState(false);
  console.log("cl:", clicked);
  return (
    <div onClick={() => setClicked(!clicked)}>
      <div class={lessStyle.button}>
        <div class={lessStyle.button_text}>{text}</div>
      </div>
    </div>
  );
};

export default FloatBtn;
