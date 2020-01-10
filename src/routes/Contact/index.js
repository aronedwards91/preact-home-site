import { h } from 'preact';
import style from './style';
import Title from "../../components/Text/Title";
import { ContactText } from "../../utils/text";

const Contact = () => (
    <div>
        <Title text={ContactText.title} />
    </div>
)

export default Contact;