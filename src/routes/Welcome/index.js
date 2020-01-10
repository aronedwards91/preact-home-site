import { h } from "preact";
import style from "./style";
import Title from "../../components/Text/Title";
import Paragraph from "../../components/Text/Paragraph";
import Link from "../../components/Text/Link";
import { WelcomeText } from "../../utils/text";
import personalImg from "../../assets/icons/android-icon-144x144.png";

const Welcome = () => (
  <div>
    <div class={style.imgBox} >
      <img src={personalImg} alt="me" class={style.img} />
    </div>
    <Title text={WelcomeText.title} />
    <Paragraph text={WelcomeText.intro1}>
      {" "}
      <Link link={WelcomeText.link1} />
      {" "}
      {WelcomeText.intro2}
    </Paragraph>
  </div>
);

export default Welcome;
