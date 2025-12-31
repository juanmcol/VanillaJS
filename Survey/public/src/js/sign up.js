import { authorize, addAccount, defaultUsers, getUsernamesAndEmails } from "../../../private/src/js/users.js";
import { setSessionUser } from "./session.js";

// if no error, continue to the main page
// and be logged in.
// create the login page.
defaultUsers();
getUsernamesAndEmails();

const displayMessage = () => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const status = addAccount(username.value, email.value, password.value);

    const message = document.getElementById("message");
    
    if (status != "Success!") {
        message.textContent = status;
    } else {
        message.textContent = "Success! Logging in...";
        const user = authorize(username.value, password.value);
        setSessionUser(user);

        setTimeout(() => {
            window.location.href = "../surveybay.html";
        }, 3000);
    }
}

const create = document.getElementById("create-account");
create.addEventListener("click", displayMessage);

const body = document.body;
body.style.color = "red";