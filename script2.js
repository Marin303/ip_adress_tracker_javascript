/*same function diffrent approach - excepted from main script*/
function provideInfo(data) {
  addressInfo.textContent = "IP ADDRESS";
  const addressValue = document.createElement("p");
  addressValue.textContent = data.ip;
  addressInfo.appendChild(addressValue);

  locationInfo.textContent = "LOCATION";
  const locationValue = document.createElement("p");
  locationValue.textContent = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
  locationInfo.appendChild(locationValue);

  timezoneInfo.textContent = "TIMEZONE";
  const timezoneValue = document.createElement("p");
  timezoneValue.textContent = data.location.timezone;
  timezoneInfo.appendChild(timezoneValue);

  ipsInfo.textContent = "ISP";
  const ispValue = document.createElement("p");
  ispValue.textContent = data.isp;
  ipsInfo.appendChild(ispValue);
}
