import React, { Component } from "react";

import { LinkedIn } from "react-linkedin-login-oauth2";

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
    console.log(error);

    this.setState({
      code: "",
      errorMessage: error.errorMessage
    });
  };

  render() {
    return (
      <div>
        <LinkedIn
          response_type="code"
          clientId="817ew6hqc3jaeg"
          scope="r_liteprofile r_emailaddress w_member_social"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="https://69mnz.csb.app/"
          renderElement={({ onClick, disabled }) => (
            <button onClick={onClick} disabled={disabled}>
              Custom linkedin element
            </button>
          )}
        />
      </div>
    );
  }
}

export default LinkedInPage;
