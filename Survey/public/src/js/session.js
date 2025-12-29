// make it so that the current user is stored in session storage
// then use that to display the current user's username in the homepage
// and when they take surveys.
// Also, add points to their balance after completing a survey.

function setSessionUser(user) {
    sessionStorage.setItem("Current User", JSON.stringify(user));
}

function getSessionUser() {
    return JSON.parse(sessionStorage.getItem("Current User"));
}

export { setSessionUser, getSessionUser };