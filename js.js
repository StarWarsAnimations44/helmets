// ================================================================================================================= //
//                                                                                                                   //
//                                              Star Wars Animations 44                                              //
//                                                                                                                   //
// ================================================================================================================= //

// ================================================================================================================= //
	// variables
// ================================================================================================================= //

const pause = 1000; // miliseconds
var backgroundIsDisplayed = true;
var sources = [];
const helmetsBackgrounds = document.getElementsByClassName("imgBackground");
const buttons = document.getElementsByTagName("button");

// ================================================================================================================= //
	// functions
// ================================================================================================================= //

function toggleBackground() {

	"use strict";
	const displayedBackgroundColor = "transparent";
	const hiddenBackgroundColor = "#ffffff";
	backgroundIsDisplayed = !backgroundIsDisplayed;
	var backgroundColor = backgroundIsDisplayed ? displayedBackgroundColor : hiddenBackgroundColor;
	for (var i = 0; i < buttons.length; i++) {buttons[i].style.backgroundColor = backgroundColor;}
	for (var j = 0; j < helmetsBackgrounds.length; j++) {
		if (backgroundIsDisplayed) {
			helmetsBackgrounds[j].src = sources[j];
		} else {
			sources[j] = helmetsBackgrounds[j].src;
			helmetsBackgrounds[j].src = "../common/void.png";
		}
	}

}

function randomSource() {

	"use strict";
	const helmets = document.getElementsByClassName("imgRandomHelmet");
	const defaultSource = "common/random.png";
	const helmetsSources = [
		"republic/common/arc_I.png",
		"republic/common/arc_II.png",
		"republic/common/arf_I.png",
		"republic/common/arf_II.png",
		"republic/common/bar_II.png",
		"republic/common/Captain_I.png",
		"republic/common/col_I.png",
		"republic/common/col_II.png",
		"republic/common/Commander_I.png",
		"republic/common/eng_I.png",
		"republic/common/eng_II.png",
		"republic/common/Lieutenant_I.png",
		"republic/common/par_II.png",
		"republic/common/pil_I.png",
		"republic/common/pil_IIA.png",
		"republic/common/pil_IIB.png",
		"republic/common/sco_II.png",
		"republic/common/Sergeant_I.png",
		"republic/common/tro_I.png",
		"republic/common/tro_II.png",
		"mandalorians/common/AxeWoves.png",
		"mandalorians/common/BobaFett.png",
		"mandalorians/common/DinDjarin.png",
		"mandalorians/common/JangoFett.png",
		"mandalorians/common/PreVizsla.png"
	];
	setInterval(
		function() {
			for (var i = helmets.length - 1; i >= 0; i--) {
				const randomIndex = Math.floor(Math.random() * helmetsSources.length);
				helmets[i].src = helmetsSources[randomIndex];
			}
		},
		pause * 2
	);

}

function englishTitleTo(language) {

	"use strict";
	var languageTitle;
	switch (language) {
		case "aurebesh":
			languageTitle = aurebeshTitle;
			break;
		case "mandoa":
			languageTitle = mandoaTitle;
			break;
	}
	englishTitle.style.display = "block";
	languageTitle.style.display = "none";
	setInterval(
		function() {
			if (languageTitle.style.display === "none") {
				languageTitle.style.display = "block";
				englishTitle.style.display = "none";
			} else {
				languageTitle.style.display = "none";
				englishTitle.style.display = "block";
			}
		},
		pause
	);

}

// ================================================================================================================= //
	// periodic backgrounds
// ================================================================================================================= //

function multiplePeriodicBackgrounds(spanList) {

	for (var i = spanList.length - 1; i >= 0; i--) {
		switch (spanList[i]) {
			case 2:
				periodicBackground2();
				break;
			case 3:
				periodicBackground3();
				break;
			case 4:
				periodicBackground4();
				break;
			case 5:
				periodicBackground5();
				break;
			case 16:
				periodicBackground16();
				break;
		}
	}

}

function periodicBackground2() {

	"use strict";
	const background12 = document.getElementsByClassName("imgBackground-1-2");
	const background22 = document.getElementsByClassName("imgBackground-2-2");
	setInterval(
		function() {
			if (background22[0].style.display === "none") {
				for (var i = background12.length - 1; i >= 0; i--) {
					background12[i].style.display = "none";
					background22[i].style.display = "block";
				}
			} else {
				for (var i = background12.length - 1; i >= 0; i--) {
					background12[i].style.display = "block";
					background22[i].style.display = "none";
				}
			}
		},
		pause
	);

}

function periodicBackground3() {

	"use strict";
	const background13 = document.getElementsByClassName("imgBackground-1-3");
	const background23 = document.getElementsByClassName("imgBackground-2-3");
	const background33 = document.getElementsByClassName("imgBackground-3-3");
	setInterval(
		function() {
			if (background33[0].style.display === "none") {
				if (background23[0].style.display === "none") {
					for (var i = background13.length - 1; i >= 0; i--) {
						background13[i].style.display = "none";
						background23[i].style.display = "block";
						background33[i].style.display = "none";
					}
				} else {
					for (var i = background13.length - 1; i >= 0; i--) {
						background13[i].style.display = "none";
						background23[i].style.display = "none";
						background33[i].style.display = "block";
					}
				}
			} else {
				for (var i = background13.length - 1; i >= 0; i--) {
					background13[i].style.display = "block";
					background23[i].style.display = "none";
					background33[i].style.display = "none";
				}
			}
		},
		pause
	);

}

function periodicBackground4() {

	"use strict";
	var background4 = [];
	for (var i = 4; i > 0; i--) {background4.push(document.getElementsByClassName("imgBackground-" + i + "-4"))}
	const length = background4[0].length;
	setInterval(
		function() {
			switch ("block") {
				case background4[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background4[0][i].style.display = "none";
						background4[1][i].style.display = "block";
					}
					break;
				case background4[1][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background4[1][i].style.display = "none";
						background4[2][i].style.display = "block";
					}
					break;
				case background4[2][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background4[2][i].style.display = "none";
						background4[3][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						background4[0][i].style.display = "block";
						background4[1][i].style.display = "none";
						background4[2][i].style.display = "none";
						background4[3][i].style.display = "none";
					}
					break;
			}
		},
		pause
	);

}

function periodicBackground5() {

	"use strict";
	var background5 = [];
	for (var i = 5; i > 0; i--) {background5.push(document.getElementsByClassName("imgBackground-" + i + "-5"))}
	const length = background5[0].length;
	setInterval(
		function() {
			switch ("block") {
				case background5[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background5[0][i].style.display = "none";
						background5[1][i].style.display = "block";
					}
					break;
				case background5[1][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background5[1][i].style.display = "none";
						background5[2][i].style.display = "block";
					}
					break;
				case background5[2][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background5[2][i].style.display = "none";
						background5[3][i].style.display = "block";
					}
					break;
				case background5[3][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background5[3][i].style.display = "none";
						background5[4][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						background5[0][i].style.display = "block";
						background5[1][i].style.display = "none";
						background5[2][i].style.display = "none";
						background5[3][i].style.display = "none";
						background5[4][i].style.display = "none";
					}
					break;
			}
		},
		pause
	);

}

function periodicBackground16() {

	"use strict";
	var background16 = [];
	for (var i = 16; i > 0; i--) {background16.push(document.getElementsByClassName("imgBackground-" + i + "-16"))}
	const length = background16[0].length;
	setInterval(
		function() {
			switch ("block") {
				case background16[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background16[0][i].style.display = "none";
						background16[1][i].style.display = "block";
					}
					break;
				case background16[1][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background16[1][i].style.display = "none";
						background16[2][i].style.display = "block";
					}
					break;
				case background16[2][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background16[2][i].style.display = "none";
						background16[3][i].style.display = "block";
					}
					break;
				case background16[3][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						background16[3][i].style.display = "none";
						background16[4][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						background16[0][i].style.display = "block";
						for (var j = 15; j > 0; j--) {background16[j][i].style.display = "none";}
					}
					break;
			}
		},
		pause
	);

}

// ================================================================================================================= //
//                                                                                                                   //
//                                              Star Wars Animations 44                                              //
//                                                                                                                   //
// ================================================================================================================= //