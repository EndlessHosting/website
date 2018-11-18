var preloader = document.querySelector("#preloader")

function hidePreloader() {
	preloader.style.opacity = "0"
	setTimeout(removePreloader, 700)
}

function removePreloader() {
	preloader.parentNode.removeChild(preloader)
}
	
window.onload = setTimeout(hidePreloader, 1000)

var html = document.querySelector("html")
var sideBar = document.querySelector(".sideBarContainer")
var sideBarOpen = document.querySelector(".eh-menu")
var sideBarClosed = document.querySelector(".eh-menu")
var contentDarken = document.querySelector(".contentDarken")

function hideSideBar() {
	sideBar.classList.add("hideSideBar")
}

function someFix() {
	sideBar.classList.add("openAnimation")
}

function openSideBar() {
	sideBarOpen.disabled = 'false';
	contentDarken.classList.remove("animateCloseOpacity")
	contentDarken.classList.add("animateOpenOpacity")
	sideBar.classList.remove("hideSideBar")
	setTimeout(someFix, 50)
	html.classList.add("noScroll")
	sideBarClosed.disabled = 'true'
}

function closeSideBar() {
	sideBarClosed.disabled = 'false';
	contentDarken.classList.remove("animateOpenOpacity")
	contentDarken.classList.add("animateCloseOpacity")
	sideBar.classList.remove("openAnimation")
	setTimeout(hideSideBar, 1050)
	html.classList.remove("noScroll")
	sideBarOpen.disabled = 'true'
}