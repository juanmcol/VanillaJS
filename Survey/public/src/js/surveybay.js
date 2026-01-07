import { getSessionUser, setSessionUser } from "./session.js";

const currentUser = getSessionUser();
const signOut = document.getElementById("sign-out");
const username = document.getElementById("username");

if (currentUser === null) {
    console.log("no current user");
    signOut.style.display = "none";
    username.style.display = "none";
} else {
    console.log(currentUser);
    username.textContent = currentUser.username;
    const logIn = document.getElementById("log-in");
    const signUp = document.getElementById("sign-up");

    logIn.style.display = "none";
    signUp.style.display = "none";

    const userPoints = document.getElementById("points");
    userPoints.textContent = currentUser.points;
}

signOut.addEventListener("click", () => {
    setSessionUser(null);
    window.location.href = "surveybay.html";
})

/* const body = document.body;
body.style.color = "red"; */