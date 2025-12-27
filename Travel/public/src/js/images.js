const rome = new Image();
rome.srcset = "public/assets/images/locations/Rome.png";
rome.alt = "The Colosseum";

const tokyo = new Image();
tokyo.srcset = "public/assets/images/locations/Tokyo.png";
tokyo.alt = "Tokyo Night";

const ypao = new Image();
ypao.srcset = "public/assets/images/locations/YpaoBeach.png";
ypao.alt = "Ypao Beach";

const paris = new Image();
paris.srcset = "public/assets/images/locations/Paris.png";
paris.alt = "Eiffel Tower";

const machu = new Image();
machu.srcset = "public/assets/images/locations/MachuPichu.png";
machu.alt = "Machu Pichu";

const gnp = new Image();
gnp.srcset = "public/assets/images/locations/GlacierNationalPark.png";
gnp.alt = "Glacier National Park";

const maldives = new Image();
maldives.srcset = "public/assets/images/locations/Maldives.png";
maldives.alt = "Maldives Resort";

const athens = new Image();
athens.srcset = "public/assets/images/locations/Athens.png";
athens.alt = "The Acropolis of Athens";

const santorini = new Image();
santorini.srcset = "public/assets/images/locations/Santorini.png";
santorini.alt = "Santorini";

const dvsp = new Image();
dvsp.srcset = "public/assets/images/locations/DinosaurValleyStatePark.png";
dvsp.alt = "Dinosaur footprints";

const location_images = [
    ["Rome", rome],
    ["Tokyo", tokyo],
    ["Ypao", ypao],
    ["Paris", paris],
    ["Machu Pichu", machu],
    ["Glacier National Park", gnp],
    ["Maldives", maldives],
    ["Athens", athens],
    ["Santorini", santorini],
    ["Dinosaur Valley State Park", dvsp]
]

function getImage(location) {
    const index = location_images.findIndex((array) => array[0] === location);
    return location_images[index][1];
}

export default getImage;