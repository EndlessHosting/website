/*

	Made by Alexander Bl.
	For Endless Hosting
	
	Started: Saturday, October 6, 2018.
	
*/

/* SideBar */

var sideBar = document.querySelector(".sideBarContainer"),
navBar = document.querySelector(".navBar")

sideBar.innerHTML =
			'<div class="contentDarken"></div>\n' +
			'<div class="sideBar">\n' +
				'<h1 style="margin:0;">Endless Hosting</h1>\n' +
				'<a href="/" class="waves-effect waves-light">Home</a>\n' +
				'<a href="/plans/" class="waves-effect waves-light">Plans</a>\n' +
				'<a href="/signup/" class="waves-effect waves-light">Sign Up</a>\n' +
				'<a href="/about/" class="waves-effect waves-light">About</a>\n' +
				'<a href="/faq/" class="waves-effect waves-light">FAQ</a>\n' +
				'<a href="https://support.theendlessweb.com/" class="waves-effect waves-light">Support</a>\n' +
				'<a href="https://cpanel.theendlessweb.com:2083/" class="waves-effect waves-light">cPanel</a>\n' +
			'</div>\n' +
			'<div class="sideBarClose" onclick="closeSideBar()"></div>'
			
/* Navigation Bar */

navBar.innerHTML =
			'<div class="menu waves-effect waves-circle waves-light" onclick="openSideBar()">\n' +
				'<i class="eh eh-menu"></i>\n' +
			'</div>\n' +
			'<a href="/" class="logo">Endless Hosting</a>\n' +
			
			'<div class="links">\n' +
				'<a href="/">Home</a>\n' +
				'<a href="/plans/" class="waves-effect waves-light">Plans</a>\n' +
				'<a href="/signup/">Sign Up</a>\n' +
				'<a href="/about/">About</a>\n' +
				'<a href="/faq/">FAQ</a>\n' +
				'<a href="https://support.theendlessweb.com/">Support</a>\n' +
				'<a href="https://cpanel.theendlessweb.com:2083/">cPanel</a>\n' +
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
					
			'<p class="copyright">&copy; 2017 – 2019 Endless Hosting</p>'
			
/* Stuff */

var html = document.querySelector("html"),
sideBarOpen = document.querySelector(".menu"),
sideBarClose = document.querySelector(".sideBarClose"),
contentDarken = document.querySelector(".contentDarken"),
question = document.getElementsByClassName("question"),
textFieldNodes = document.querySelectorAll(".textField input"),
i,
x

function openSideBar() {
	sideBarClose.setAttribute("disabled", "")
	contentDarken.classList.remove("animateCloseOpacity")
	contentDarken.classList.add("animateOpenOpacity")
	sideBar.classList.remove("hideSideBar")
	setTimeout(function() {
		sideBar.classList.add("openAnimation")
	},
	50
	)
	
	html.classList.add("noScroll")
	setTimeout(function() {
		sideBarClose.removeAttribute("disabled")
	},
	500
	)
}

function closeSideBar() {
	sideBarOpen.setAttribute("disabled", "")
	contentDarken.classList.remove("animateOpenOpacity")
	contentDarken.classList.add("animateCloseOpacity")
	sideBar.classList.remove("openAnimation")
	setTimeout(function() {
		sideBar.classList.add("hideSideBar")
	},
	550
	)
	html.classList.remove("noScroll")
	setTimeout(function() {
		sideBarOpen.removeAttribute("disabled")
	},
	600
	)
}

for (i = 0; i < question.length; i++) {
	question[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var answer = this.nextElementSibling
		if (answer.style.height) {
			answer.style.height = null
			answer.style.padding = null
		}
		else {
			answer.style.height = answer.scrollHeight + 32 + "px"
			answer.style.padding = "16px"
		} 
	}
	)
}

for (x = 0; x < textFieldNodes.length; x++) {
	textFieldNodes[x].addEventListener("focusout", function() {
		this.setAttribute("value", this.value);this.classList.remove("default")
	}
	)
}

var prevScrollpos = window.pageYOffset
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset
	if (prevScrollpos > currentScrollPos) {
		sideBarOpen.removeAttribute("disabled")
		navBar.style.top = null
		navBar.style.boxShadow = null
	} else {
		sideBarOpen.setAttribute("disabled", "")
		navBar.style.top = "-56px"
		navBar.style.boxShadow = "none"
	}
	prevScrollpos = currentScrollPos
}