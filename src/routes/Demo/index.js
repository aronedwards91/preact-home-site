import { h } from 'preact';
import style from './style';
import Title from "../../components/Text/Title";
import { DemoText } from "../../utils/text";

const Demo = () => (
    <div>
        <Title text={DemoText.title} />
    </div>
)

export default Demo;