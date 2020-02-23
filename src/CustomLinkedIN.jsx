import React, { Component } from "react";
/* Importing AXIOS from AXIOS Library*/
import axios from "axios";
import jsonp from "axios-jsonp";
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
    this.winUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clienID}&redirect_uri=${callBackUrl}&scope=r_liteprofile+r_emailaddress&state=98765EeFWf45A53sdfKef4233`;

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
        console.log(e.getCurrentStack);
      }
      console.log(search);
      if (search) {
        // grab the token and error from the location of the popup window
        const authCode = this.getParameterByName("code", search);
        const error = this.getParameterByName("error", search);

        /* This is used to stoken the authorization code */
        const linkedInAuthCode = authCode;
        console.log("auth=", authCode);
        console.log("error=", error);
        const ROOT_URL = `https://www.linkedin.com/oauth/v2/accessToken`;

        /* Sending Request object to server js file where the actual request is going to get fire for access token */
        const REQ_OBJECT = {
          grant_type: "authorization_code",
          code: linkedInAuthCode,
          redirect_uri: callBackUrl,
          client_id: clienID,
          client_secret: secretKey
        };

        var param = new URLSearchParams();
        param.append("grant_type", "authorization_code");
        param.append("code", linkedInAuthCode);
        param.append("redirect_uri", callBackUrl);
        param.append("client_id", clienID);
        param.append("client_secret", secretKey);

        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*"
        };
        const checkURL = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${linkedInAuthCode}&redirect_uri=${callBackUrl}&client_id=817ew6hqc3jaeg&client_secret=R0DW1klEdggd6VLB`;

        var href = document.querySelector("#hit").getAttribute("href");
        // window.location.href = checkURL;

        axios({
          url: checkURL,
          adapter: jsonp
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));

        /* LinkedIn Base url */
        // axios
        //   .post(checkURL)
        //   .then(accessTokens => {
        //     console.log(accessTokens);
        //     const accessToken = accessTokens.data;

        //     const peopleUrl = userDetailsRoute;
        //     const sentData = {
        //       oauth2_access_token: accessToken
        //     };
        //     console.log(sentData);

        /* Axios request for Getting Linkedin User details */
        // axios.post(peopleUrl, sentData)
        //     .then((success) => {
        //       const userInfo = success.data;
        //       if(userInfo && userInfo.id) {
        //         console.log("userInfo", userInfo);
        //       }
        //     })
        //     .catch((errored) => {
        //       console.log("errored", errored);
        //     });
        // })
        // .catch(errors => {
        //   console.log("errors", errors);
        // });

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

        <a href="" id="hit"></a>
      </div>
    );
  }
}

/* Exporting the CustomLinkedIn Component Just need to import this component wherever needed */
export default CustomLinkedIN;
