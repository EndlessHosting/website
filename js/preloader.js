/*

	Made by Alexander Bl

*/

var preloader = document.querySelector("#preloader")

function hidePreloader() {
	preloader.style.opacity = 0
	setTimeout(removePreloader, 700)
}

function removePreloader() {
	preloader.parentNode.removeChild(preloader)
}

window.onload = setTimeout(hidePreloader, 250)