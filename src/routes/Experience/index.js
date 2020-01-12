import { h } from "preact";
import style from "./style";
import Title, { Subtitle } from "../../components/Text/Title";
import ListItem from "../../components/ListItem";
import { PadLight } from "../../components/Padder";
import { ExperienceText } from "../../utils/text";

import assetTV from "../../assets/icons/Experience/ExperienceTDG.png";
import bae from "../../assets/icons/Experience/ExperienceBAE.png";
import atos from "../../assets/icons/Experience/ExperienceAtos.png";
import travel from "../../assets/icons/Experience/ExperienceTravel.png";
import xerox from "../../assets/icons/Experience/ExperienceXerox.png";
import imago from "../../assets/icons/Experience/ExperienceImago.png";
import buff from "../../assets/icons/Experience/ExperienceBuff.png";

const ExperienceList = [
  {
    title: "Asset TV",
    sub: "May19 - Current",
    text: `assettv text`,
    icon: assetTV
  },
  {
    title: "BAE",
    sub: "Jun18 - May19 :: Scrum, Commercial MERN, Academy Training, AWS",
    icon: bae,
    text: `Began role with a 3 month software training course which covered java, Swift, javascript (inc. MERN & Vue), testing & Scrum.
  My first project was a react app that interacted with network services, followed the design of the UI team via material-ui, and worked with the product owner to iterate the design and better the concept as the project rolled on.
  The second project, focused on using cloud tools to easily spin up resources via a react UI, the main focus was on getting the most out of AWS & including working with Lambdas, the AWS-API and Cloudformation.`
  }
];

const GeneralExperience = [
  {
    title: "Atos",
    sub:
      "Jul17 - May18 :: Microsoft/Proprietary Software Support, Customer Communication, Problem Solving.",
    icon: atos,
    text: `Worked on the IT Support desk supporting technology inside The McDonalds franchise restaurants.
  Dealt with Microsoft systems and customer software, issues came in from store managers calling in, would then guide them through fixing things remotely or advising them on physical actions to take.
  Built up strong tech communication skills and knowledge of production system problems.`
  },
  {
    title: "Travelling & Studys",
    sub: "Aug16 - May17 :: Udacity, Java, Android",
    icon: travel,
    text: `Got van to go round Ireland, van died in Wales (long story...), ended up wandering the wonderful welsh mountainside from a lovely spot owned by family.
    During this I did some online training to build up skills for a developer career, passed the Udacity courses; Android Basics & Intro to Java. With the final result being a basic android app built with Java.`
  },
  {
    title: "Xerox",
    sub:
      "Nov12 - Aug16  :: Proprietary Software Support, Image Processing Support, Customer Communication, Problem Solving",
    icon: xerox,
    text: `Began via 3 year apprenticeship, culminating in a 4 year, Level4 in IT Software finished in early 2016. Continued working on the remote support IT desk, dealing with high volume,production printer systems.
    Helped customers deal with User interface, system problems and debugged print ready files like PDF. Direct working with users, built up communication skills and practiced dealing with stressed and angry clients.
    Gave insight into business process and working within large organisations.`
  },
  {
    title: "Imago",
    sub: "Sep10 - Jan12 :: Sales Assistant, store Maintenance",
    icon: imago,
    text: `Looked after customer at photography studio, built skills in customer support and communication skills.`
  },
  {
    title: "Buffera",
    subtitle:
      "Aug09 - Jul10 :: Warehouse Assistant, stock Management, Attention to detail",
    icon: buff,
    text: `Worked in the warehouse helping a small team quickly deal with customer orders, also was tasked with setting up delivery and ensuring correct data entry under high volume.`
  }
];

const Experience = () => (
  <div>
    <Title text={ExperienceText.title} />
    <PadLight />
    <Subtitle text={ExperienceText.subtitleSoftware} />
    <PadLight />
    {ExperienceList.map(Item => (
      <div>
        <ListItem {...Item} />
        <PadLight />
      </div>
    ))}
    <PadLight />
    <Subtitle text={ExperienceText.subtitleGeneral} />
    <PadLight />
    {GeneralExperience.map(Item => (
      <div>
        <ListItem {...Item} />
        <PadLight />
      </div>
    ))}
  </div>
);

export default Experience;
