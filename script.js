const addressInfo = document.querySelector(".ipAdress");
const locationInfo = document.querySelector(".location");
const timezoneInfo = document.querySelector(".timezone");
const ipsInfo = document.querySelector(".ips");
const input = document.querySelector("input");
const button = document.querySelector("button");

/* 8.8.8.8 */

button.addEventListener("click", fetchData);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchData();
    input.value = "";
  }
});
function fetchData() {
  const apiKey = "at_kUhn9ldzNBXS22twWB9jkfw6XNoZF";
  const ipAddress = input.value;
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
  )
    .then((response) => response.json())
    .then((data) => {
      provideInfo(data);
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
let map = L.map("map").setView([45.81, 15.98], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let marker = L.marker([45.81, 15.98]).addTo(map);
let circle = L.circle([45.79, 15.95], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);
