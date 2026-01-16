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


contents.textContent = "";
users.forEach(user => {
    contents.innerHTML += `<h3>${JSON.stringify(user.username)}</h2>` + JSON.stringify(user) + "<br><br>";    
});

// still running all lines of code? uncomment to test
/* const body = document.body;
body.style.backgroundColor = "darkslategray"; */