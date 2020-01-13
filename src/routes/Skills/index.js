import { h } from "preact";
import style from "./style";
import Title, { Subtitle } from "../../components/Text/Title";
import ListItem from "../../components/ListItem";
import { PadLight, PadLine } from "../../components/Padder";
import { SkillsText } from "../../utils/text";

import js from "../../assets/icons/Skills/js.png";
import react from "../../assets/icons/Skills/react.png";

const recentSkills = [{
    title: "JavaScript",
    sub: "The master tool",
    text: `My general everyday tool from which all libraries stem. So far been great, especially the speed at which work can be developed!`,
    icon: js,
  },
  {
    title: "React",
    sub: "The ultra utilitarian web library",
    text: `Damn it's good, even when it's a pain in the behind. I've just come off building a responsive web app, and the resulting code base has been a pleasure to navigate, the component structure really lets you produce a beautifully organised file structure.`,
    icon: react,
  }];

const Skills = () => (
  <div>
    <Title text={SkillsText.title} />
    <PadLight />
    <PadLight />
    <Subtitle text={SkillsText.recentUse} />
    <PadLight />
    {recentSkills.map(Item => (
      <div>
        <ListItem {...Item} />
        <PadLine />
      </div>
    ))}
    <PadLight />
    <Subtitle text={SkillsText.pastUse} />
    <PadLight />
  </div>
);

export default Skills;
