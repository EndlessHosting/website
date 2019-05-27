/*

	Made by Alexander Bl.
	For Endless Hosting

	Started: Saturday, October 6, 2018.
	Finished: Monday May 13, 2019.

*/

spartezSupportChat = {
	url: "https://jira.theendlessweb.com",
	portal: 1,
}

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
				//'<a href="/about/" class="waves-effect waves-light">About</a>\n' +
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
				'<a href="/" class="waves-effect waves-light">Home</a>\n' +
				'<a href="/plans/" class="waves-effect waves-light">Plans</a>\n' +
				'<a href="/signup/" class="waves-effect waves-light">Sign Up</a>\n' +
				//'<a href="/about/" class="waves-effect waves-light">About</a>\n' +
				'<a href="/faq/" class="waves-effect waves-light">FAQ</a>\n' +
				'<a href="https://support.theendlessweb.com/" class="waves-effect waves-light">Support</a>\n' +
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
				'<script type="text/javascript">var spartezSupportChat = {url: "https://jira.theendlessweb.com",portal: 1,}</script><script type="text/javascript" src="https://jira.theendlessweb.com/download/resources/com.spartez.jira.plugins.support-chat/frontend/js/chat.js"></script>\n' +
					
			'<p class="copyright">&copy; 2019 Endless Hosting</p>'
			
/* Stuff */

var html = document.querySelector("html"),
sideBarOpen = document.querySelector(".menu"),
sideBarClose = document.querySelector(".sideBarClose"),
contentDarken = document.querySelector(".contentDarken"),
question = document.getElementsByClassName("question"),
textFieldNodes = document.querySelectorAll(".textField input")

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

for (x = 0; x < question.length; x++) {
	question[x].addEventListener("click", function() {
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
	})
}

for (x = 0; x < textFieldNodes.length; x++) {
	textFieldNodes[x].addEventListener("change", function() {
		for (x = 0; x < textFieldNodes.length; x++) {
			if (this == textFieldNodes[2]) {
				textFieldNodes[x].setAttribute("value", textFieldNodes[x].value.toLowerCase())
			}
			else {
				textFieldNodes[x].setAttribute("value", textFieldNodes[x].value)
			}
		}
	})
	textFieldNodes[x].addEventListener("focusout", function() {
		this.classList.remove("default")
	})
}

var prevScrollpos = window.pageYOffset
window.addEventListener("scroll", function() {
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
})

/* Signup Form Validation */

if (document.querySelector(".signUpPage")) {

	var alertContainer = document.querySelector(".alertContainer"),
	alertText = document.querySelector(".alertContainer span"),
	ToSPPCheckBox = document.querySelector(".checkBoxPlaceholder input")

	ToSPPCheckBox.checked = false

	document.querySelector(".signUpSubmit").addEventListener("click", validateForm)

	function formAlert(alertTextString, alertType) {//alertText.innerText = alertTextString

		if (alertContainer.style.height > 0 + "px" && alertText.innerText != alertTextString) {
			alertContainer.style.height = 0
			setTimeout(function() {
				alertText.innerText = alertTextString
				alertTypeF()
				alertContainer.style.height = alertText.offsetHeight + 16 + "px"
			},
			500
			)
		}
		else {
			alertText.innerText = alertTextString
			alertTypeF()
			alertContainer.style.height = alertText.offsetHeight + 16 + "px"
		}

		function alertTypeF() {
			if (alertType == "error") {
				alertContainer.style.backgroundColor = "#D32F2F"
			}
			else if (alertType == "warning") {
				alertContainer.style.backgroundColor = "#FFA000"
			}
			else if (alertType == "success") {
				alertContainer.style.backgroundColor = "#388E3C"
			}
		}
	}

	function validateForm() {
		invalidInput = false
		for (x = 0; x < textFieldNodes.length; x++) {
			if (textFieldNodes[x].validity.valid == false) {
				invalidInput = true
			}
		}
		if (invalidInput || RegExp("[a-z0-9]$").test(textFieldNodes[2].value) == false) {
			formAlert("Please make sure all fields are valid.", "warning")
			return false
		}
		else if (grecaptcha && grecaptcha.getResponse().length == 0) {
			formAlert("Please verify that you are not a robot.", "warning")
			return false
		}
		else if (ToSPPCheckBox.checked != true) {
			formAlert("Please accept our Terms of Service and Privacy Policy.", "warning")
			return false
		}
		sendForm()
	}

	function sendForm() {
		httpreq = new XMLHttpRequest()
		httpreq.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					formAlert("Success! Your request for account creation with username " + textFieldNodes[1] + "has been sent!", "success")
				}
				else if (this.status == 429) {
					formAlert("Error " + this.status + ": " + this.statusText + "\nYou are sending too many requests and have been ratelimited. Please wait a few minutes and try again.", "warning")
				}
				else {
					formAlert("Error " + this.status + ": " + this.statusText + "\nPlease try again or contact an administrator to resolve this issue.", "error")
				}
			}
		}
		httpreq.open("POST", "/processsignup.php", true)
		httpreq.send("name=" + textFieldNodes[0].value + "&last_name=" + textFieldNodes[1].value + "&username=" + textFieldNodes[2].value + "&email=" + textFieldNodes[3] + "&company=" + textFieldNodes[4] + "&referrer=" + textFieldNodes[5] + "&response=" + document.querySelector(".g-recaptcha") + "&acceptToSPP=" + ToSPPCheckBox.checked)
	}
}