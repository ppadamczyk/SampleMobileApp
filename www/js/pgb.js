document.querySelector("button").addEventListener( click, deviceInfo);
function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	document.querySelector("body").classList.toggle("magic")
	
}