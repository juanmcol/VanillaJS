import { authorize } from "../../../private/src/js/users.js";

const displayMessage = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const user = authorize(username.value, password.value);

    const message = document.getElementById("message");
    if (user === -1) {
        message.textContent = "username or password is incorrect";
    } else {
        message.textContent = "Success!";
    }
    console.log(user);
}

const login = document.getElementById("log-in");
login.addEventListener("click", displayMessage);

const body = document.body;
body.style.color = "green";