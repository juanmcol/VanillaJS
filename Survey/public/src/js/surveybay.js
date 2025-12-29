import { getSessionUser } from "./session.js";

const currentUser = getSessionUser();

if (currentUser === null) {
    console.log("no current user");
} else {
    console.log(currentUser);
}

/* const body = document.body;
body.style.color = "red"; */