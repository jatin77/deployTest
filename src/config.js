/* Configurations for Linkedin Api */

/* Client Id for Linkedin */
export const clienID = '817ew6hqc3jaeg';

/* Secret Key for Linkedin */
export const secretKey = 'R0DW1klEdggd6VLB';
const urlHost = window.location.host;

/* Callback url for Linkedin */
export const callBackUrl = `http://${urlHost}/job/callback/linkedin`;


/* Backend route for getting Linkedin Access Token */
export const accessTokenRoute = 'https://www.linkedin.com/oauth/v2/accessToken';

/* Backend route for getting Linkedin User Details */
export const userDetailsRoute = `http://${urlHost}/linkedinuserdetails`;

