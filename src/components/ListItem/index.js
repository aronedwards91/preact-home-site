import { h } from "preact";
import style from "./style";

const ListItem = ({ icon, title, sub, text }) => (
  <div class={style.container}>
    {icon ? (
      <div class={style.icon}>
        <img src={icon} alt={`icon${title}`} class={style.iconImg} />
      </div>
    ) : null}
    <div class={style.textHolder}>
      <div class={style.textTitle}>{title}</div>
      <div class={style.textSubtitle}>{sub}</div>
      <div class={style.textMain}>{text}</div>
    </div>
  </div>
);

export const SmListItem =({ icon, title, link, text }) => {
  let linkText = link.replace('https://www.', '');
  linkText = linkText.replace('http://www.', '');
  linkText = linkText.replace('www.', '');

  return (
  <div class={style.container}>
    {icon ? (
      <div class={style.icon}>
        <img src={icon} alt={`icon${title}`} class={style.iconImg} />
      </div>
    ) : null}
    <div class={style.SmTextHolder}>
      <div class={style.textTitle}>{title}</div>
      {link && <a class={style.link} href={link} target="_target" >{linkText}</a>}
      {text && <div class={style.textMain}>{text}</div>}
    </div>
  </div>
)}

export default ListItem;
