import { h } from "preact";
// import style from "./style.css";
import style from './style';
import { useState } from "preact/hooks";

const FloatBtn = ({text}) => {
  const [clicked, setClicked] = useState(false);
  console.log("cl:", clicked);
  return (
    <div onClick={() => setClicked(!clicked)}>
      <div class={style.button}>
        <div class={style.button_text}>{text}</div>
      </div>
    </div>
  );
};

export const WelcomeBtn = () => (
  <FloatBtn text="Welcome" />
);
export const SkillsBtn = () => (
  <FloatBtn text="Skills" />
);
export const ExperienceBtn = () => (
  <FloatBtn text="Experience" />
);
export const DemoBtn = () => (
  <FloatBtn text="Demo" />
);
export const BookListBtn = () => (
  <FloatBtn text="Book List" />
);
export const ContactBtn = () => (
  <FloatBtn text="Contact" />
);

export default FloatBtn;
