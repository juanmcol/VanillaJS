// use async and await for single targeted data
// and place them in separate categories.

// use promises and promise.all to fetch multiple categories
// for a single example that will load something from each.

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

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const users = await getData(urlUsers);

const contents = document.getElementById("contents");

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


contents.textContent = "";
users.forEach(user => {
    contents.innerHTML += `<h3>${JSON.stringify(user.username)}</h3>` + JSON.stringify(user);
    structureUserData(user);
});

// still running all lines of code? uncomment to test
/* const body = document.body;
body.style.backgroundColor = "darkslategray"; */