import { h } from "preact";
import { route } from 'preact-router';
import routes from "../../utils/routing.json";
import style from './style';
import { useState } from "preact/hooks";

const FloatBtn = ({text, path}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    route(path);
    setClicked(!clicked)
  }
  return (
    <div onClick={handleClick}>
      <div class={style.button}>
        <div class={style.button_text}>{text}</div>
      </div>
    </div>
  );
};

export const WelcomeBtn = () => (
  <FloatBtn text="Welcome" path={routes.welcome} />
);
export const ExperienceBtn = () => (
  <FloatBtn text="Experience" path={routes.experience}/>
);
export const BookListBtn = () => (
  <FloatBtn text="Book List" path={routes.booklist} />
);
export const SkillsBtn = () => (
  <FloatBtn text="Skills" path={routes.skills} />
);
export const DemoBtn = () => (
  <FloatBtn text="Demo" path={routes.demo} />
);
export const ContactBtn = () => (
  <FloatBtn text="Contact" path={routes.contact} />
);

export default FloatBtn;
