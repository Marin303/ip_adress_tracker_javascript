const addressInfo = document.querySelector(".ipAdress");
const locationInfo = document.querySelector(".location");
const timezoneInfo = document.querySelector(".timezone");
const ipsInfo = document.querySelector(".ips");
const input = document.querySelector("input");
const button = document.querySelector("button");
let map;
let marker;
let circle;

initializeMap(45.81, 15.98);

button.addEventListener("click", fetchData);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchData();
    input.value = "";
  }
});

function fetchData() {
  const apiKey = process.env.API_KEY;
  const ipAddress = input.value;
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
  )
    .then((response) => response.json())
    .then((data) => {
      provideInfo(data);
      updateMap(data.location.lat, data.location.lng);
      console.log(data);
    })
    .catch((err) => console.error(err));
}

function provideInfo(data) {
  addressInfo.innerHTML = `<span>IP ADDRESS</span><p>${data.ip}</p>`;
  locationInfo.innerHTML = `<span>LOCATION</span><p>${data.location.city}, ${data.location.region}, ${data.location.country}</p>`;
  timezoneInfo.innerHTML = `<span>TIMEZONE</span> <p>${data.location.timezone}</p>`;
  ipsInfo.innerHTML = `<span>ISP</span><p>${data.isp}</p>`;
}

function initializeMap(lat, lng) {
  map = L.map("map").setView([lat, lng], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  marker = L.marker([lat, lng]).addTo(map);
  circle = L.circle([lat, lng], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);
}

function updateMap(lat, lng) {
  marker.setLatLng([lat, lng]);
  circle.setLatLng([lat, lng]);
  map.setView([lat, lng], 13);
}

/*circle should have diffrent value than lat,lng*/
