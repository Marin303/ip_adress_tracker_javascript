parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var t,n,e,o=document.querySelector(".ipAdress"),c=document.querySelector(".location"),a=document.querySelector(".timezone"),r=document.querySelector(".ips"),i=document.querySelector("input"),p=document.querySelector("button"),l="at_kUhn9ldzNBXS22twWB9jkfw6XNoZF";function u(){var t=i.value;fetch("https://geo.ipify.org/api/v2/country,city?apiKey=".concat(l,"&ipAddress=").concat(t)).then(function(t){return t.json()}).then(function(t){s(t),y(t.location.lat,t.location.lng),console.log(t)}).catch(function(t){return console.error(t)})}function s(t){o.innerHTML="<span>IP ADDRESS</span><p>".concat(t.ip,"</p>"),c.innerHTML="<span>LOCATION</span><p>".concat(t.location.city,", ").concat(t.location.region,", ").concat(t.location.country,"</p>"),a.innerHTML="<span>TIMEZONE</span> <p>".concat(t.location.timezone,"</p>"),r.innerHTML="<span>ISP</span><p>".concat(t.isp,"</p>")}function d(o,c){t=L.map("map").setView([o,c],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t),n=L.marker([o,c]).addTo(t),e=L.circle([o,c],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:500}).addTo(t)}function y(o,c){n.setLatLng([o,c]),e.setLatLng([o,c]),t.setView([o,c],13)}d(45.81,15.98),p.addEventListener("click",u),i.addEventListener("keydown",function(t){"Enter"===t.key&&(u(),i.value="")});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.dcd56a3f.js.map