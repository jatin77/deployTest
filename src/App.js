import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { LinkedInPopUp } from "react-linkedin-login-oauth2";

// import { LinkedIn } from "react-linkedin-login-oauth2";
import LinkedIn from "linkedin-login-for-react";

class LinkedInPage extends Component {
  state = {
    // code: "",
    // errorMessage: ""
  };

  // handleSuccess = data => {
  //   console.log(data);
  //   this.setState({
  //     code: data.code,
  //     errorMessage: ""
  //   });
  // };

  // handleFailure = error => {
  //   console.log(error);

  //   this.setState({
  //     code: "",
  //     errorMessage: error.errorMessage
  //   });
  // };
  callbackLinkedIn = (
    error,
    code,
    redirectUri = "https://dazzling-jang-a707c9.netlify.com"
  ) => {
    if (error) {
      // signin failed
    } else {
      // Obtain authorization token from linkedin api
      // see https://developer.linkedin.com/docs/oauth2 for more info
    }
  };

  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/linkedin" component={LinkedInPopUp} />
          </Switch>
        </BrowserRouter> */}

        <LinkedIn
          clientId="817ew6hqc3jaeg"
          callback={this.callbackLinkedIn}
          text="Login With LinkedIn"
        />
        {/* 
        <LinkedIn
          clientId="817ew6hqc3jaeg"
          scope="r_liteprofile r_emailaddress w_member_social"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="https://dazzling-jang-a707c9.netlify.com"
          renderElement={({ onClick, disabled }) => (
            <button onClick={onClick} disabled={disabled}>
              Custom linkedin element
            </button>
          )}
        /> */}
      </div>
    );
  }
}

export default LinkedInPage;
