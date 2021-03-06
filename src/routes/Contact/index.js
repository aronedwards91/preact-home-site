import { h } from "preact";
import style from "./style";
import Title from "../../components/Text/Title";
import { ContactText } from "../../utils/text";
import { SmListItem } from "../../components/ListItem";
import { PadLight } from "../../components/Padder";

import linkedin from "../../assets/icons/contact/linkedin.png";
import github from "../../assets/icons/contact/github.png";

const ContactProps = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/aronedwards/",
    icon: linkedin
  },
  {
    title: "Github",
    link: "https://github.com/aronedwards91",
    icon: github
  }
];

const Contact = () => (
  <div>
    <Title text={ContactText.title} />
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
