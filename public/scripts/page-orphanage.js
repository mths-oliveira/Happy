const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

const map = L.map("mapid", options).setView([lat, lng], 17);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([lat, lng], { icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;
  console.log(button);

  const buttons = document.querySelectorAll(".images button");
  console.log(buttons[0]);

  buttons.forEach((removeActiveClass) => {});

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src;

  button.classList.add("active");
}

const buttons = document.querySelectorAll(".images button");
const imageContainer = document.querySelector(".orphanage-details > img");

let i = 0;
let interval = setInterval(() => {
  for (button of buttons) {
    button.classList.remove("active");
  }
  buttons[i].classList.add("active");

  let image = buttons[i].children[0];
  imageContainer.src = image.src;

  i++;

  if (i == 6) {
    i = 0;
  }
}, 2000);


