import { h } from "preact";
import style from "./style";
import Title from "../../components/Text/Title";
import Paragraph from "../../components/Text/Paragraph";
import { WelcomeText } from "../../utils/text";

const Welcome = () => (
  <div>
    <Title text={WelcomeText.title} />
    <Paragraph text={WelcomeText.intro1} />
  </div>
);

export default Welcome;
