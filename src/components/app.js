import { h, Component } from "preact";
import { Router } from "preact-router";
if (process.env.NODE_ENV==='development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  console.log('dev');
  require("preact/debug");
}

import Background from "./Background";
import Grid from "./Grid";
import { MobileShow, MobileHide } from "./Mobile";
import MobileBtnRow from "./MobileBtnRow";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Background />
        <MobileShow>
          <MobileBtnRow />
        </MobileShow>
        <Grid />
        <link
          href="https://fonts.googleapis.com/css?family=Sulphur+Point:400,700&display=swap"
          rel="stylesheet"
        />
      </div>
    );
  }
}
