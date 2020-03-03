import { h } from "preact";
import style from "./style";
import Title, { Subtitle } from "../../components/Text/Title";
import ListItem from "../../components/ListItem";
import { PadLight, PadLine } from "../../components/Padder";
import { SkillsText } from "../../utils/text";
import {mainSkill, otherLib} from './content';

const Skills = () => (
  <div>
    <Title text={SkillsText.title} />
    <PadLight />
    <PadLight />
    <Subtitle text={SkillsText.recentUse} />
    <PadLight />
    {mainSkill.map(Item => (
      <div>
        <ListItem {...Item} />
        <PadLine />
      </div>
    ))}
    <PadLight />
    <Subtitle text={SkillsText.pastUse} />
    <PadLight />
    {otherLib.map(Item => (
      <div>
        <ListItem {...Item} />
        <PadLine />
      </div>
    ))}
  </div>
);

export default Skills;
