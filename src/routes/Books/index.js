import { h } from 'preact';
import style from './style';
import Title, { Subtitle } from "../../components/Text/Title";
import ListItem from "../../components/ListItem";
import { PadLight, PadLine } from "../../components/Padder";
import { BooksText } from "../../utils/text";

const NonFictionBooks = [
    {
      title: "The Deluge",
      sub: "Adam Tooze",
      text: `A big ol history book`,
    },
    {
      title: "A History of Britain and the British People",
      sub: "Arthur Bryant",
      text: `A immersive and powerful history full of strange and dangerous moments, written with a engrossing flair for the dramatic.`
    }
  ];

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
)

export default Books;