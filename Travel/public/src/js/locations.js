import getImage from "./images.js";

// locations
const locations = [
    {
        name: "Rome",
        country: "Italy",
        image: getImage("Rome"),
        description: "All roads lead to Rome. The Colosseum was the heart of Rome, where many gladiators fought for glory in hopes of etching their names across history in aeternum (for eternity).",
        category: ["History"]
    },
    {
        name: "Tokyo",
        country: "Japan",
        image: getImage("Tokyo"),
        description: "Tokyo. Possibly the most cyberpunk theme city. Still no enchanced humans, but technology is everywhere. Tokyo really feels alive at night.",
        category: ["City"]
    },
    {
        name: "Ypao Beach, Tumon",
        country: "Guam",
        image: getImage("Ypao"),
        description: "Ypao Beach",
        category: ["Beach"]
    },
    {
        name: "Paris",
        country: "France",
        image: getImage("Paris"),
        description: "Paris, the City of Love.",
        category: ["City", "Romance"]
    },
    {
        name: "Machu Pichu",
        country: "Peru",
        image: getImage("Machu Pichu"),
        description: "Machu Pichu",
        category: ["History"]
    },
    {
        name: "Glacier National Park, Montana",
        country: "United States",
        image: getImage("Glacier National Park"),
        description: "Beautiful",
        category: ["Nature"]
    },
    {
        name: "Maldive Islands",
        country: "Maldives",
        image: getImage("Maldives"),
        description: "Over 1,000 islands",
        category: ["Island"]
    },
    {
        name: "Athens",
        country: "Greece",
        image: getImage("Athens"),
        description: "Acropolis",
        category: ["History"]
    },
    {
        name: "Santorini",
        country: "Greece",
        image: getImage("Santorini"),
        description: "A Greek island.",
        category: ["History", "Island"]
    },
    {
        name: "Dinosaur Valley State Park, Glen Rose",
        country: "Texas",
        image: getImage("Dinosaur Valley State Park"),
        description: "Dinosaur footprints found after a drought.",
        category: ["Family", "History"]
    }
];

const locationsDiv = document.getElementById("locations");
function addLocation(location) {
    const index = locations.findIndex((loc) => loc.name === location);

    // new div, class name = location
    const div = document.createElement("div");
    div.className = "location";

    // h2, name and country
    const name = locations[index].name;
    const country = locations[index].country;
    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.textContent = `${name}, ${country}`;

    // image
    locationsDiv.appendChild(div);
    div.appendChild(locations[index].image);

    // description
    const p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = locations[index].description;
}

function base() {
    locationsDiv.innerHTML = "";
    addLocation("Rome");
    addLocation("Tokyo");
}

base();
/* const home = document.getElementById("Home");
home.addEventListener("click", base); */


// category selector
function addCategory(category) {
    locations.forEach((location) => {
        if (location.category.includes(category)) {
            addLocation(location.name);
        }
    });
}

function selectCategory(category) {
    locationsDiv.innerHTML = "";
    addCategory(category);
}


// category click events
const beach = document.getElementById("Beach");
beach.addEventListener("click", () => selectCategory("Beach"));

const city = document.getElementById("City");
city.addEventListener("click", () => selectCategory("City"));

const family = document.getElementById("Family");
family.addEventListener("click", () => selectCategory("Family"));

const history = document.getElementById("History");
history.addEventListener("click", () => selectCategory("History"));

const island = document.getElementById("Island");
island.addEventListener("click", () => selectCategory("Island"));

const nature = document.getElementById("Nature");
nature.addEventListener("click", () => selectCategory("Nature"));

const romance = document.getElementById("Romance");
romance.addEventListener("click", () => selectCategory("Romance"));