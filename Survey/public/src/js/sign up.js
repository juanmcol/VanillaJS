import {addAccount} from "../../../private/src/js/users.js";

// if no error, continue to the main page
// and be logged in.
// create the login page.

const displayMessage = () => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const status = addAccount(username.value, email.value, password.value);

    const message = document.getElementById("message");
    message.textContent = status;
}

const create = document.getElementById("create-account");
create.addEventListener("click", displayMessage);

const body = document.body;
body.style.color = "red";