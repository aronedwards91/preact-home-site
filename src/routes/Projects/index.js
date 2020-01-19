import { h } from "preact";
import style from "./style";
import Title from "../../components/Text/Title";
import { ProjectsText } from "../../utils/text";
import { SmListItem } from "../../components/ListItem";
import { PadLight } from "../../components/Padder";

import linkedin from "../../assets/icons/contact/linkedin.png";

const ContactProps = [
  {
    title: "Old Website",
    link: "oldwebsite.netlify.com",
    icon: linkedin
  }
];

const Contact = () => (
  <div>
    <Title text={ProjectsText.title} />
    <PadLight />
    {ContactProps.map(Item => (
      <div>
        <SmListItem {...Item} />
        <PadLight />
      </div>
    ))}
  </div>
);

export default Contact;
