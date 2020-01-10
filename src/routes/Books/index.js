import { h } from 'preact';
import style from './style';
import Title from "../../components/Text/Title";
import { BooksText } from "../../utils/text";

const Books = () => (
    <div>
        <Title text={BooksText.title} />
    </div>
)

export default Books;