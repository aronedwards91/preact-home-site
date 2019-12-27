import { h } from "preact";
import style from "./style";
import { Router } from "preact-router";
import routes from "../../utils/routing.json";

import Welcome from "../../routes/Welcome";
import Experience from "../../routes/Experience";
import Books from "../../routes/Books";
import Skills from "../../routes/Skills";
import Demo from "../../routes/Demo";
import Contact from "../../routes/Contact";

const MainBox = () => (
  <div class={style.mainBox}>
    <Router>
      <Welcome path="/" />
      <Welcome path={routes.welcome} />
      <Experience path={routes.experience} />
      <Books path={routes.booklist} />
      <Skills path={routes.skills} />
      <Demo path={routes.demo} />
      <Contact path={routes.contact} />
    </Router>
  </div>
);

export default MainBox;
