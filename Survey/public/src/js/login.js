import { authorize, defaultUsers } from "../../../private/src/js/users.js";
import { setSessionUser } from "./session.js";

defaultUsers();

const displayMessage = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const user = authorize(username.value, password.value);

    const message = document.getElementById("message");
    if (user === -1) {
        message.textContent = "username or password is incorrect";
    } else {
        message.textContent = "Success! Logging in...";
        console.log(user);
        setSessionUser(user);

        setTimeout(() => {
            window.location.href = "../surveybay.html";
        }, 3000);
    }
}

const login = document.getElementById("log-in");
login.addEventListener("click", displayMessage);

const body = document.body;
body.style.color = "green";