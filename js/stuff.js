/*

	Made by Alexander Bl.
	For Endless Hosting
	
	Started: Saturday, October 6, 2018.
	
*/

/* Preloader */

var preloader = document.querySelector("#preloader")

function hidePreloader() {
	preloader.style.opacity = "0"
	setTimeout(removePreloader, 700)
}

function removePreloader() {
	preloader.parentNode.removeChild(preloader)
}
	
window.onload = setTimeout(hidePreloader, 1000)

/* SideBar */

var sideBar = document.querySelector(".sideBarContainer")

sideBar.innerHTML =
			'<div class="contentDarken"></div>\n' +
			'<div class="sideBar">\n' +
				'<h1 style="margin:0;">Endless Hosting</h1>\n' +
				'<a href="/signup/" class="waves-effect waves-light active">Sign Up</a>\n' +
				'<a href="/faq/" class="waves-effect waves-light">FAQ</a>\n' +
				'<a href="/partner/" class="waves-effect waves-light">Partner</a>\n' +
				'<a href="/contact/" class="waves-effect waves-light">Contact</a>\n' +
				'<a href="https://cpanel.theendlessweb.com:2083/" class="waves-effect waves-light">cPanel</a>\n' +
			'</div>\n' +
			'<div class="sideBarClose" onclick="closeSideBar()"></div>'
			
/* Navigation Bar */

document.querySelector(".navBar").innerHTML =
			'<div class="menu waves-effect waves-circle waves-light" onclick="openSideBar()">\n' +
				'<i class="eh eh-menu"></i>\n' +
			'</div>\n' +
			'<a href="/" class="logo">Endless Hosting</a>\n' +
			
			'<div class="links">\n' +
				'<a href="/signup/"/>Sign Up</a>\n' +
				'<a href="/faq/">FAQ</a>\n' +
				'<a href="/partner/">Partner</a>\n' +
				'<a href="/contact/">Contact</a>\n' +
				'<a href="https://cpanel.theendlessweb.com:2083/" class="waves-effect waves-light">cPanel</a>\n' +
			'</div>'

/* Footer */

document.querySelector(".footerContainer").innerHTML =
			"<!-- Don't touch -->\n" +
			'<div class="footerHelper"></div>\n' +
			
			'<div class="footer">\n' +
				'<h3>Endless Hosting</h3>\n' +
					
				'<div class="wrap">\n' +
					'<h4>Social</h4>\n' +
					'<a href="https://twitter.com/EndlessHosting_/" target="_blank" class="linkWrap">\n' +
						'<i class="eh eh-twitter"></i>\n' +
						'<p>Twitter</p>\n' +
					'</a>\n' +
					'<a href="https://github.com/EndlessHosting/" target="_blank" class="linkWrap">\n' +
						'<i class="eh eh-github"></i>\n' +
						'<p>Github</p>\n' +
					'</a>\n' +
					'<a href="https://discord.gg/jVa63vC/" target="_blank" class="linkWrap">\n' +
						'<i class="eh eh-discord"></i>\n' +
						'<p>Discord</p>\n' +
					'</a>\n' +
				'</div>\n' +
					
				'<div class="wrap">\n' +
					'<h4>Donate</h4>\n' +
					'<a href="https://paypal.me/Electromaster/" target="_blank" class="linkWrap">\n' +
						'<i class="eh eh-paypal"></i>\n' +
						'<p>PayPal</p>\n' +
					'</a>\n' +
					'<a href="https://patreon.com/EndlessHosting/" target="_blank" class="linkWrap">\n' +
						'<i class="eh eh-patreon"></i>\n' +
						'<p>Patreon</p>\n' +
					'</a>\n' +
				'</div>\n' +
					
			'<p class="copyright">&copy; 2017 – 2018 Endless Hosting</p>'
			
/* Stuff */

var html = document.querySelector("html")
var sideBarOpen = document.querySelector(".eh-menu")
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
	sideBarOpen.disabled = 'true'
}

function closeSideBar() {
	sideBarOpen.disabled = 'false';
	contentDarken.classList.remove("animateOpenOpacity")
	contentDarken.classList.add("animateCloseOpacity")
	sideBar.classList.remove("openAnimation")
	setTimeout(hideSideBar, 550)
	html.classList.remove("noScroll")
	sideBarOpen.disabled = 'true'
}