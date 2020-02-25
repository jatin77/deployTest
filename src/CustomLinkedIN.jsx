import React, { Component } from "react";
/* Importing AXIOS from AXIOS Library*/
import axios from "axios";
// import jsonp from "axios-jsonp";
import jsonp from "jsonp";
/* Gets configuration for Linkedin Api */
import {
  clienID,
  secretKey,
  callBackUrl,
  accessTokenRoute,
  userDetailsRoute,
  urlHost
} from "./config";

/* Gets Linkedin Logo */

class CustomLinkedIN extends Component {
  constructor(props) {
    super(props);

    /* Url for getting authorization code */
    this.winUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clienID}&redirect_uri=${callBackUrl}&scope=r_liteprofile+r_emailaddress+w_member_social&state=98765EeFWf45A53sdfKef4233`;

    this.linkedinRequest = this.linkedinRequest.bind(this);
    this.getParameterByName = this.getParameterByName.bind(this);
  }

  /* Function to set name and achieve code value from its parameters */
  getParameterByName(name, search) {
    const match = RegExp("[?&]" + name + "=([^&]*)").exec(search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  /* Function that will fire all the request for getting access token and user details of the person login in */
  linkedinRequest() {
    /* Creates a new Window */
    const newWindow = window.open(this.winUrl, "_blank", true, 500, 600);

    if (window.focus) {
      newWindow.focus();
    }

    const intr = setInterval(() => {
      // if the window gets closed for any reason then clear the interval to prevent this from running for ever
      if (newWindow.closed) {
        clearInterval(intr);
      }

      // if we are able to read the location.search, then its back to the correct domain
      // if not, then it's on api or the provider domain and we can't read the location
      let search;
      try {
        search = newWindow.location.search;
      } catch (e) {
        // console.log(e.getCurrentStack);
      }
      if (search) {
        // grab the token and error from the location of the popup window
        const authCode = this.getParameterByName("code", search);
        const error = this.getParameterByName("error", search);

        /* This is used to stoken the authorization code */
        const linkedInAuthCode = authCode;
        console.log("authCode=", authCode);
        console.log("error=", error);

        /* Sending Request object to server js file where the actual request is going to get fire for access token */

        axios
          .get(`https://api.kraftshala.com/getLinkedinToken?code=${authCode}`)
          .then(res => console.log(res.data.data.token))
          .catch(error => console.log(error));

        /* This will close the window popup automatically once all the above requests are completed */
        newWindow.close();
      }
    }, 100);
  }

  /* Render function to create a structure for linkedin button */
  render() {
    return (
      <div>
        <span title="Connect With LinkedIn" onClick={this.linkedinRequest}>
          <button>Linked</button>
        </span>
        <p className="linkedin-text">
          Connect with your personal LinkedIn account
        </p>
      </div>
    );
  }
}

/* Exporting the CustomLinkedIn Component Just need to import this component wherever needed */
export default CustomLinkedIN;
