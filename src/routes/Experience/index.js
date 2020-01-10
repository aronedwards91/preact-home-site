import { h } from 'preact';
import style from './style';
import Title from "../../components/Text/Title";
import { ExperienceText } from "../../utils/text";

const Experience = () => (
    <div>
        <Title text={ExperienceText.title} />
    </div>
)

export default Experience;