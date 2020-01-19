import { h } from "preact";
import style from "./style";
import {
  WelcomeBtn,
  SkillsBtn,
  ExperienceBtn,
  ProjectBtn,
  BookListBtn,
  ContactBtn
} from "../FloatBtn";
import MainBox from "../MainBox";

const Grid = () => (
  <div class={style.grid}>
    <div class={style.childSm1}>
      <WelcomeBtn />
    </div>
    <div class={style.childSm2}>
      <SkillsBtn />
    </div>
    <div class={style.childSm3}>
      <ExperienceBtn />
    </div>
    <div class={style.childSm4}>
      <ProjectBtn />
    </div>
    <div class={style.childSm5}>
      <BookListBtn />
    </div>
    <div class={style.childSm6}>
      <ContactBtn />
    </div>
    <div class={style.childBG}>
      <MainBox />
    </div>
  </div>
);

export default Grid;
