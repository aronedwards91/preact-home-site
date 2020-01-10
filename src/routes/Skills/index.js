import { h } from 'preact';
import style from './style';
import Title from "../../components/Text/Title";
import { SkillsText } from "../../utils/text";

const Skills = () => (
    <div>
        <Title text={SkillsText.title} />
    </div>
)

export default Skills;