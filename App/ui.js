// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const userName = document.getElementById('userName');
const content = document.getElementById('content');
const tableDiv = document.getElementById('table-div');
const tableBody = document.getElementById('table-body-div');
const editProfileButton = document.getElementById('editProfileButton');
const callApiButton = document.getElementById('callApiButton');
const response = document.getElementById("response");
const meetingUrl = document.getElementById('teamsJoinUrl');
const callContainer = document.getElementById('callContainer');
const openIn = document.getElementById('openIn');

function welcomeUser(username) {
    userName.innerText = username;

    signInButton.classList.add('d-none');

    content.classList.remove('d-none');
    signOutButton.classList.remove('d-none');
    editProfileButton.classList.remove('d-none');
}

function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}

function joinCall(acsUserId, acsToken, idTokenClaims) {
    const meetingLink = meetingUrl.value;
    const app = openIn.selectedOptions[0].value;
    switch (app) {
        case "acs": 
            callComposite.loadCallComposite(
            {
                locator: { meetingLink },
                displayName: idTokenClaims.given_name + " " + idTokenClaims.family_name,
                userId: { communicationUserId: acsUserId },
                token: acsToken
            },
            callContainer,
            {} // Optional, Object contains all optional props for composite, check composite page for more details
            );
            break;
        case "teams":
            window.open(meetingLink, '_blank').focus();
            break;
    }
}