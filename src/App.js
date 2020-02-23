import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LinkedInPopUp } from "./social/linked";

class LinkedInPage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {" "}
            <Route exact path="/linkedin" component={LinkedInPopUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default LinkedInPage;
