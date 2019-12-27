import { h } from "preact";
import { route } from "preact-router";
import style from "./style";

const Title = ({text}) => <div class={style.title}>{text}</div>;

export default Title;