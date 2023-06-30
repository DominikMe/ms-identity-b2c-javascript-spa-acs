// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const welcomeDiv = document.getElementById('welcome-div');
const tableDiv = document.getElementById('table-div');
const tableBody = document.getElementById('table-body-div');
const editProfileButton = document.getElementById('editProfileButton');
const callApiButton = document.getElementById('callApiButton');
const response = document.getElementById("response");
const meetingUrl = document.getElementById('teamsJoinUrl');
const acsContainer = document.getElementById('acsContainer');

function welcomeUser(username) {
    welcomeDiv.innerHTML = `Welcome ${username}!`

    signInButton.classList.add('d-none');

    signOutButton.classList.remove('d-none');
    editProfileButton.classList.remove('d-none');
    welcomeDiv.classList.remove('d-none');
    callApiButton.classList.remove('d-none');
    meetingUrl.classList.remove('d-none');
}

function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}

function joinCall(acsUserId, acsToken, idTokenClaims) {
    const meetingLink = meetingUrl.value;
    callComposite.loadCallComposite(
    {
        locator: { meetingLink },
        displayName: idTokenClaims.given_name + " " + idTokenClaims.family_name,
        userId: { communicationUserId: acsUserId },
        token: acsToken
    },
    acsContainer, // container element
    {} // Optional, Object contains all optional props for composite, check composite page for more details
    );
}