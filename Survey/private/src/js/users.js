// users
let users = [];

// usernames
let usernames = ["firstuser"];

// emails
let emails = ["myemail1@email.com"];

// user class
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    set firstName(first) {
        this.first = first;
    }
    set lastName(last) {
        this.last = last;
    }
    
    /* accountNumber = function() {
        let number = 0;
        for(let i = 0; i < 9; ++i) {
            number *= 10;
            number += Math.floor(Math.random() % 10);
        }
        return number;
    } */
}

const firstUser = new user("firstuser", "myemail1@email.com", "password123");
const secondUser = new user("seconduser", "myemail2@email.com", "password456");
users.push(firstUser);
users.push(secondUser);
usernames.push("seconduser");
emails.push("myemail2@email.com");

// check that the account is valid
const validate = (username, email, password) => {
    /* getUsernamesAndEmails(); */
    const usernameStatus = usernames.includes(username);

    if (username.length < 2) {
        return "This username is too short";
    } else if (username.length > 8) {
        return "This username is too long";
    } else if (usernameStatus === true) {
        return "This username is unavailable";
    } else {
        const emailStatus = emails.includes(email);

        if (email.includes(".com") === false && email.includes(".net") === false) {
            return "This email address is not valid";
        } else if (emailStatus === true) {
            return "This email address is already being used";
        } else {
            if (password.length < 8) {
                return "This password is too short";
            } else if (password.length > 64) {
                return "This password is too long";
            } else if (password === "password") {
                return "This password is not secure enough";
            } else {
                return "1";
            }
        }
    }
}

// add account to users. Return success or error message
const valid = (username, email, password) => {
    const status = validate(username, email, password);
    if (status === "1") {
        if (sessionStorage.getItem("User List") === null) {
            users = getUsers();
        }

        users.push(new user(username, email, password));
        usernames.push(username);
        emails.push(email);
        setUsernames();
        setEmails();
        stringifyUsers();
        setUsers();
        return "Success!";
    } else {
        return status;
    }
}

// add account, for public
const addAccount = (username, email, password) => {
    const status = valid(username, email, password);
    return status;
}

// verify that this account is in users
const verify = (username, password) => {
    users = getUsers();
    for (let i = 0; i < users.length; ++i) {
        if (users[i].username === username && users[i].password === password) {
            return users[i];
        }
    }
    return -1;
}

// authorize the user, return the user
const authorize = (username, password) => {
    const user = verify(username, password);
    if (user != -1) {
        return user;
    } else {
        return -1;
    }
}

// array to hold stringified users
let stringifiedUsers = [];

// stringify a user and push to the stringifiedUsers array
const stringifyUser = (userObj) => {
    const user = JSON.stringify(userObj);
    stringifiedUsers.push(user);
}

const stringifyParsedUsers = () => {
    stringifiedUsers = [];
    users.forEach(user => stringifyUser(user));
}

// stringify all saved users
const stringifyUsers = () => {
    if(sessionStorage.getItem("User List") === null) {
        for (let i = 0; i < users.length; ++i) {
            stringifyUser(users[i]);
        }
    } else {
        stringifyParsedUsers();
    }
}

// save the stringifiedUsers array to the session storage
const setUsers = () => {
    sessionStorage.setItem("User List", stringifiedUsers);
}

// get the user list from the session storage
const getUsers = () => {
    let sessionUsers = "[";
    sessionUsers += sessionStorage.getItem("User List");
    sessionUsers += "]";
    const parsedUsers = JSON.parse(sessionUsers);

    return parsedUsers;
}

/* const getUsersStringified = () => {
    return "[" + sessionStorage.getItem("User List") + "]";
} */

// set default users
const defaultUsers = () => {
    if (sessionStorage.getItem("User List") === null) {
        stringifyUsers();
        setUsers();
    }
}


// get and set usernames and emails
const getUsernamesAndEmails = () => {
    if (sessionStorage.getItem("Usernames") === null) {
        setUsernames();
    } else {
        usernames = JSON.parse(sessionStorage.getItem("Usernames"));
    }

    if (sessionStorage.getItem("Emails") === null) {
        setEmails();
    } else {
        emails = JSON.parse(sessionStorage.getItem("Emails"));
    }
}

const setUsernames = () => {
    sessionStorage.setItem("Usernames", JSON.stringify(usernames));
}

const setEmails = () => {
    sessionStorage.setItem("Emails", JSON.stringify(emails));
}

export {addAccount, authorize, defaultUsers, getUsernamesAndEmails };