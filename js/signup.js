function gotoWebHosting () {
	document.getElementById("mainChoose").style = "display: none;";
	document.getElementById("webHostingPlans").style = "";
}

function gotoVpsHosting () {
	document.getElementById("mainChoose").style = "display: none;";
	document.getElementById("vpsPlansContainer").style = "";
}

function showFreeHosting (){
	document.getElementById("webHostingPlans").style = "display: none;";
	document.getElementById("hostingFree").style = "";
}

function startOver () {
	document.getElementById("mainChoose").style = "";
	document.getElementById("vpsPlansContainer").style = "display: none;";
	document.getElementById("webHostingPlans").style = "display: none;";
	document.getElementById("hostingFree").style = "display: none;";
}
