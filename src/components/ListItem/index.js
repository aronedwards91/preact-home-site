import { h } from "preact";
import style from "./style";

const ListItem = ({ icon, title, sub, text }) => (
  <div class={style.container}>
    <div class={style.icon}>
    <img src={icon} alt={`icon${title}`} class={style.iconImg} />
    </div>
    <div class={style.textHolder}>
      <div class={style.textTitle}>{title}</div>
      <div class={style.textSubtitle}>{sub}</div>
      <div class={style.textMain}>{text}</div>
    </div>
  </div>
);

export default ListItem;
