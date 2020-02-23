import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LinkedInPopUp } from "../../linked";
import LinkedInPage from "./LinkedInPage";

class Demo extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/linkedin" component={LinkedInPopUp} />
          <Route path="/" component={LinkedInPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Demo;
