import React from "react";
import "./../sass/main.scss";

//router
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Buyslide1 from "./buynow/Buyslide1";
import Buyslide2 from "./buynow/Buyslide2";
import Buyslide3 from "./buynow/Buyslide3";
import Buyslide4 from "./buynow/Buyslide4";

function BuyNow() {
  return (
    <Router>
      <div className="buy">
        <Route exact path="/buynow" component={Buyslide1} />
        <Route exact path="/buynow2" component={Buyslide2} />
        <Route exact path="/buynow3" component={Buyslide3} />
        <Route exact path="/buynow4" component={Buyslide4} />
      </div>
    </Router>
  );
}

export default BuyNow;
