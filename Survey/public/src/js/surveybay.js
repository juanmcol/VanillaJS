import { getSessionUser } from "./session.js";

// Make sure all default/new emails and usernames
// are stored in the sessionStorage.

const currentUser = getSessionUser();

if (currentUser === null) {
    console.log("no current user");
} else {
    console.log(currentUser);
    const userPoints = document.getElementById("points");
    userPoints.textContent = currentUser.points;
}

/* const body = document.body;
body.style.color = "red"; */