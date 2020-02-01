import { h } from "preact";
import style from "./style";
import Title, { Subtitle } from "../../components/Text/Title";
import ListItem from "../../components/ListItem";
import { PadLight, PadLine } from "../../components/Padder";
import { BooksText } from "../../utils/text";
import { NonFictionBooks } from "./content";

const Books = () => (
  <div>
    <Title text={BooksText.title} />
    <PadLight />
    <PadLight />
    <Subtitle text={BooksText.nonFiction} />
    <PadLight />
    {NonFictionBooks.map(Item => (
      <div>
        <ListItem {...Item} />
        <PadLine />
      </div>
    ))}
  </div>
);

export default Books;
