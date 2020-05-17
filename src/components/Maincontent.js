import React from "react";
import "./../sass/main.scss";

//router
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import LandingPage1 from "./maincontent/LandingPage/LandingPage1";
import LandingPage2 from "./maincontent/LandingPage/LandingPage2";
import LandingPage3 from "./maincontent/LandingPage/LandingPage3";
import LandingPage4 from "./maincontent/LandingPage/LandingPage4";

function Maincontent() {
  return (
    <Router>
      <div className="maincontent">
        <Route exact path="/" component={LandingPage1} />
        <Route exact path="/landing2" component={LandingPage2} />
        <Route exact path="/landing3" component={LandingPage3} />
        <Route exact path="/landing4" component={LandingPage4} />
      </div>
    </Router>
  );
}

export default Maincontent;
