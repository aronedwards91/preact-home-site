import { h } from "preact";
import style from "./style";
import Title from "../../components/Text/Title";
import ListItem from "../../components/ListItem";
import { PadLight } from "../../components/Padder";
import { ExperienceText } from "../../utils/text";

const ExperienceList = [
  {
    title: "Asset TV",
    subtitle: "May19 - Current",
    main: `assettv text`
  },
  {
    title: "BAE",
    subtitle: "Jun18 - May19 :: Scrum, Commercial MERN, Academy Training, AWS",
    main: `Began role with a 3 month software training course which covered java, Swift, javascript (inc. MERN & Vue), testing & Scrum.
  My first project was a react app that interacted with network services, followed the design of the UI team via material-ui, and worked with the product owner to iterate the design and better the concept as the project rolled on.
  The second project, focused on using cloud tools to easily spin up resources via a react UI, the main focus was on getting the most out of AWS & including working with Lambdas, the AWS-API and Cloudformation.`
  }
];

const GeneralExperience = [
  {
    title: "Atos",
    subtitle:
      "Jul17 - May18 :: Microsoft/Proprietary Software Support, Customer Communication, Problem Solving.",
    main: `Worked on the IT Support desk supporting technology inside The McDonalds franchise restaurants.
  Dealt with Microsoft systems and customer software, issues came in from store managers calling in, would then guide them through fixing things remotely or advising them on physical actions to take.
  Built up strong tech communication skills and knowledge of production system problems.`
  }
];

const Experience = () => (
  <div>
    <Title text={ExperienceText.title} />
    <PadLight />
    {ExperienceList.map(Item => (
      <div>
        <ListItem title={Item.title} sub={Item.subtitle} text={Item.main} />
        <PadLight />
      </div>
    ))}
    <PadLight />
    {GeneralExperience.map(Item => (
      <div>
        <ListItem title={Item.title} sub={Item.subtitle} text={Item.main} />
        <PadLight />
      </div>
    ))}
  </div>
);

export default Experience;
