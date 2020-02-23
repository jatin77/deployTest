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
          <Route
            exact
            path="https://dazzling-jang-a707c9.netlify.com/linkedin"
            component={LinkedInPopUp}
          />
          <Route path="/" component={LinkedInPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Demo;
