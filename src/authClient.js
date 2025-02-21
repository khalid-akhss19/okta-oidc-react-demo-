import { OktaAuth } from "@okta/okta-auth-js";
import { oktaConfig } from "./oktaConfig";

const authClient = new OktaAuth(oktaConfig);

export default authClient;