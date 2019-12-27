import { h } from "preact";
import { route } from "preact-router";
import style from "./style";

const Paragraph = ({text}) => <div class={style.Paragraph}>{text}</div>;

export default Paragraph;
