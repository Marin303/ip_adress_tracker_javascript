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
    `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`
  )
    .then((response) => response.json())
    .then((data) => {
      provideInfo(data);
      console.log(data);
    })
    .catch((err) => console.error(err));
}

function provideInfo(data) {
  addressInfo.innerHTML = `IP ADDRESS: <p> ${data.ip}</p>`;
  locationInfo.innerHTML = `LOCATION:<p> ${data.location.city}, ${data.location.region}, ${data.location.country}</p>`;
  timezoneInfo.innerHTML = `TIMEZONE: <p>${data.location.timezone}</p>`;
  ipsInfo.innerHTML = `ISP: <p>${data.isp}</p>`;
}
