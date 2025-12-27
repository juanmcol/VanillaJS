// users
let users = [];

// usernames
const usernames = ["firstuser"];

// emails
const emails = ["myemail@email.com"];

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

const firstUser = new user("firstuser", "myemail@email.com", "password123");
const secondtUser = new user("seconduser", "myemail2@email.com", "password456");
users.push(firstUser);
users.push(secondtUser);

// check that the account is valid
const validate = (username, email, password) => {
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
        users.push(new user(username, email, password));
        usernames.push(username);
        emails.push(email);
        console.log(users);
        stringifyUsers();
        setUsers();
        console.log(sessionStorage.getItem("User List"));
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
        /* console.log(i);
        console.log(users[i].username);
        console.log(users[i].password); */
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
const stringifiedUsers = [];

// stringify a user and push to the stringifiedUsers array
const stringifyUser = (userObj) => {
    const user = JSON.stringify(userObj);
    stringifiedUsers.push(user);
}

// stringify all saved users
const stringifyUsers = () => {
    if(sessionStorage.getItem("User List").length < 1) {
        for (let i = 0; i < users.length; ++i) {
            stringifyUser(users[i]);
        }
    } else {
        stringifyUser(users[users.length - 1]);
    }
    setUsers();
}

// save the stringifiedUsers array to the session storage
const setUsers = () => {
    sessionStorage.setItem("User List", stringifiedUsers);
}

// get the user list from the session storage
const getUsers = () => {
    const userList = sessionStorage.getItem("User List");
    let jsonString = "";
    const userListParsed = [];
    for (let i = 0; i < userList.length; ++i) {
        if (userList[i] != "}") {
            jsonString += userList[i];
        } else {
            jsonString += "}";
            ++i;
            let userObject = JSON.parse(jsonString);
            userListParsed.push(userObject);
            jsonString = "";
        }
    }
    return userListParsed;
}

export {addAccount, authorize};