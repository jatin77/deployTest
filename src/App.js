import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LinkedInPopUp } from "./social/linked";
// import Auth from "./try2/Auth.jsx";
import CustomLinkedIN from "./CustomLinkedIN";

class LinkedInPage extends Component {
  render() {
    return (
      <div>
        <CustomLinkedIN />
      </div>
    );
  }
}

export default LinkedInPage;
