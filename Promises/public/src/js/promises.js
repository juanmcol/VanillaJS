// use async and await for single targeted data
// and place them in separate categories.

// use promises and promise.all to fetch multiple categories
// for a single example that will load something from each.

const urlPhotos = "https://jsonplaceholder.typicode.com/photos";
const urlComments = "https://jsonplaceholder.typicode.com/comments";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlUsers = "https://jsonplaceholder.typicode.com/users";

// function to fetch data from a url
async function getData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

// contents, where the data gets displayed
const contents = document.getElementById("contents");

// fetch users
async function fetchUsers() {
    contents.textContent = "";
    const users = await getData(urlUsers);
    
    const structureUserData = (user) => {
        const id = user.id;
        const name = user.name;
        const username = user.username;
        const email = user.email;
    
        const address = user.address;
        const street = address.street;
        const suite = address.suite;
        const city = address.city;
        const zip = address.zipcode;
    
        const geo = address.geo;
        const latitude = geo.lat;
        const longitude = geo.lng;
    
        const phone = user.phone;
        const website = user.website;
    
        const company = user.company;
        const compName = company.name;
        const compPhrase = company.catchPhrase;
        const compStatement = company.bs;
    
        const userDiv = document.createElement("div");
        userDiv.class = "user";
    
        const userHead = document.createElement("h3");
        userHead.innerHTML = username + " (Structured)";
    
        const userData = document.createElement("p");
        userData.innerHTML = `ID: ${id}<br>
        Name: ${name}<br>
        Username: ${username}<br>
        Email: ${email}<br>
        Address: ${street} ${suite}, ${city}, ${zip}<br>
        Geolocation: ${latitude}, ${longitude}<br>
        Phone: ${phone}<br>
        Website: ${website}<br>
        Company: ${compName}, "<i>${compPhrase}</i>", ${compStatement}`;
    
        userDiv.appendChild(userHead);
        userDiv.appendChild(userData);
        userData.style.lineHeight = "1.5rem";
        userDiv.style.paddingBottom = "2rem";
        contents.appendChild(userDiv);
    }
    
    users.forEach(user => {
        contents.innerHTML += `<h3>${JSON.stringify(user.username)}</h3>` + JSON.stringify(user);
        structureUserData(user);
    });
}

async function fetchPosts() {
    contents.textContent = "";
    const posts = await getData(urlPosts);
    const users = await getData(urlUsers);

    const idList = [];
    users.forEach(user => {
        idList.push([user.id, user.username]);
    })

    const structurePostData = (post) => {
        const userId = post.userId;
        const title = post.title;
        const body = post.body;
        let user = "";

        idList.some(id => {
            if (id[0] === userId) {
                user = id[1];
                return true;
            }
        })

        const postDiv = document.createElement("div");
        postDiv.class = "post";
    
        const postHead = document.createElement("h2");
        postHead.innerHTML = `${title.toUpperCase()}`;
        
        const postAuthor = document.createElement("h4");
        postAuthor.innerHTML = "by " + user;
    
        const postData = document.createElement("p");
        postData.innerHTML = body + ".";

        postDiv.append(postHead, postAuthor, postData);
        postDiv.style.paddingTop = "2rem";
        contents.appendChild(postDiv);
    }

    posts.forEach(post => {
        structurePostData(post);
        contents.innerHTML += `${JSON.stringify(post)}<br><br>`;
    });
}



// select categories
const catPosts = document.getElementById("posts");
catPosts.addEventListener("click", fetchPosts);

const catUsers = document.getElementById("users");
catUsers.addEventListener("click", fetchUsers);


// still running all lines of code? uncomment to test
/* const body = document.body;
body.style.backgroundColor = "darkslategray"; */