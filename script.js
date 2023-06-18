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
  const apiKey = "";
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
  addressInfo.textContent = `IP ADRESS: ${data.ip}`;
  locationInfo.textContent = `LOCATION: ${data.location.city}, ${data.location.region}, ${data.location.country}`;
  timezoneInfo.textContent = `TIMEZONE: ${data.location.timezone}`;
  ipsInfo.textContent = `ISP: ${data.isp}`;
}
