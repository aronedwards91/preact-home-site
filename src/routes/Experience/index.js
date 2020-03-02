import { h } from "preact";
import style from "./style";
import Title, { Subtitle } from "../../components/Text/Title";
import ListItem from "../../components/ListItem";
import { PadLight, PadLine } from "../../components/Padder";
import { ExperienceText } from "../../utils/text";

import {ExperienceList, GeneralExperience} from './content';

const Experience = () => (
  <div>
    <Title text={ExperienceText.title} />
    <PadLight />
    <PadLight />
    <Subtitle text={ExperienceText.subtitleSoftware} />
    <PadLight />
    {ExperienceList.map((Item, index, array) => (
      <div>
        <ListItem {...Item} />
        <PadLight />
        {array.length !== index + 1 && <PadLine />}
      </div>
    ))}
    <PadLight />
    <Subtitle text={ExperienceText.subtitleGeneral} />
    <PadLight />
    {GeneralExperience.map((Item, index, array) => (
      <div>
        <ListItem {...Item} />
        <PadLight />
        {array.length !== index + 1 && <PadLine />}
      </div>
    ))}
  </div>
);

export default Experience;
