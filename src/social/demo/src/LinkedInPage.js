import React, { Component } from "react";

import { LinkedIn } from "../../linked";

class LinkedInPage extends Component {
  state = {
    code: "",
    errorMessage: ""
  };

  handleSuccess = data => {
    console.log(data);
    this.setState({
      code: data.code,
      errorMessage: ""
    });
  };

  handleFailure = error => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage
    });
  };
  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="817ew6hqc3jaeg"
          // redirectUri={`${window.location.origin}/linkedin`}
          redirectUri="https://dazzling-jang-a707c9.netlify/linkedin"
          scope="r_liteprofile r_emailaddress"
          state="34232423"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          supportIE
          redirectPath="/linkedin"
        >
          <img
            src={require("./assets/linkedin.png")}
            alt="Log in with Linked In"
            style={{ maxWidth: "180px" }}
          />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
