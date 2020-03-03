import { h } from "preact";
import style from "./style";
import Title from "../../components/Text/Title";
import { ProjectsText } from "../../utils/text";
import { SmListItem } from "../../components/ListItem";
import { PadLight } from "../../components/Padder";

import {ProjectList} from './content';

const Contact = () => (
  <div>
    <Title text={ProjectsText.title} />
    <PadLight />
    {ProjectList.map(Item => (
      <div>
        <SmListItem {...Item} />
        <PadLight />
      </div>
    ))}
  </div>
);

export default Contact;
