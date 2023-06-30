/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: SIGNUP_SIGNIN,
        editProfile: EDIT_PROFILE
    },
    authorities: {
        signUpSignIn: {
            authority: SIGNUP_SIGNIN_AUTHORITY,
        },
        editProfile: {
            authority: EDIT_PROFILE_AUTHORITY
        }
    },
    authorityDomain: AUTHORITY_DOMAIN
}