import { h } from "preact";
import style from "./style";
import {
  WelcomeBtn,
  SkillsBtn,
  ExperienceBtn,
  DemoBtn,
  BookListBtn,
  ContactBtn
} from "../FloatBtn";

const MobileBtnRow = () => (
  <div class={style.MobileRow}>
    <WelcomeBtn />
    <SkillsBtn />
    <ExperienceBtn />
    <DemoBtn />
    <BookListBtn />
    <ContactBtn />
  </div>
);

export default MobileBtnRow;
