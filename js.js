// ================================================================================================================== //
//                                                                                                                    //
//                                                Star Wars Animations 44                                             //
//                                                                                                                    //
// ================================================================================================================== //

var backgroundIsDisplayed = true;
var sources = [];
var displayedBackgroundColor = "transparent";
var hiddenBackgroundColor = "#ffffff";
const helmetsBackgrounds = document.getElementsByClassName("background");
const buttons = document.getElementsByTagName("button");
const wait = 1000; // miliseconds

function toggleBackground() {

	"use strict";

	if (backgroundIsDisplayed) {

		backgroundIsDisplayed = false;

		for (var i = 0; i < buttons.length; i++) {

			buttons[i].style.backgroundColor = hiddenBackgroundColor;

		}

		for (var j = 0; j < helmetsBackgrounds.length; j++) {

			sources[j] = helmetsBackgrounds[j].src;
			helmetsBackgrounds[j].src = "models/void.png";

		}

	} else {

		backgroundIsDisplayed = true;

		for (var k = 0; k < buttons.length; k++) {

			buttons[k].style.backgroundColor = displayedBackgroundColor;

		}

		for (var m = 0; m < helmetsBackgrounds.length; m++) {

			helmetsBackgrounds[m].src = sources[m];

		}

	}

}

function englishAubresh() {

	"use strict";

	const titleEnglish = document.getElementById("titleEnglish");
	const titleAurebesh = document.getElementById("titleAurebesh");
	titleEnglish.style.display = "block";
	titleAurebesh.style.display = "none";

	setInterval(

		function() {

			if (titleAurebesh.style.display === "none") {

				titleAurebesh.style.display = "block";
				titleEnglish.style.display = "none";

			} else {

				titleAurebesh.style.display = "none";
				titleEnglish.style.display = "block";

			}

		},

		wait

	);

}

function periodicBackground2() {

	"use strict";

	const background12 = document.getElementsByClassName("background-1-2");
	const background22 = document.getElementsByClassName("background-2-2");
	background12[0].style.display = "block";
	background22[0].style.display = "none";

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

		wait

	);

}

function periodicBackground3() { // pas utilisée dans le code :(

	"use strict";

	const background13 = document.getElementsByClassName("background-1-3");
	const background23 = document.getElementsByClassName("background-2-3");
	const background33 = document.getElementsByClassName("background-3-3");
	background13[0].style.display = "block";
	background23[0].style.display = "none";
	background33[0].style.display = "none";

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

		wait

	);

}

function periodicBackground4() {

	"use strict";

	const background14 = document.getElementsByClassName("background-1-4");
	const background24 = document.getElementsByClassName("background-2-4");
	const background34 = document.getElementsByClassName("background-3-4");
	const background44 = document.getElementsByClassName("background-4-4");
	background14[0].style.display = "block";
	background24[0].style.display = "none";
	background34[0].style.display = "none";
	background44[0].style.display = "none";

	setInterval(

		function() {

			if (background44[0].style.display === "none") {

				if (background34[0].style.display === "none") {

					if (background24[0].style.display === "none") {

						for (var i = background14.length - 1; i >= 0; i--) {

							background14[i].style.display = "none";
							background24[i].style.display = "block";
							background34[i].style.display = "none";
							background44[i].style.display = "none";

						}

					} else {

						for (var i = background14.length - 1; i >= 0; i--) {

							background14[i].style.display = "none";
							background24[i].style.display = "none";
							background34[i].style.display = "block";
							background44[i].style.display = "none";

						}

					}

				} else {

					for (var i = background14.length - 1; i >= 0; i--) {

						background14[i].style.display = "none";
						background24[i].style.display = "none";
						background34[i].style.display = "none";
						background44[i].style.display = "block";

					}

				}

			} else {

				for (var i = background14.length - 1; i >= 0; i--) {

					background14[i].style.display = "block";
					background24[i].style.display = "none";
					background34[i].style.display = "none";
					background44[i].style.display = "none";

				}

			}

		},

		wait

	);

}

function periodicBackground5() {

	"use strict";

	const background15 = document.getElementsByClassName("background-1-5");
	const background25 = document.getElementsByClassName("background-2-5");
	const background35 = document.getElementsByClassName("background-3-5");
	const background45 = document.getElementsByClassName("background-4-5");
	const background55 = document.getElementsByClassName("background-5-5");
	background15[0].style.display = "block";
	background25[0].style.display = "none";
	background35[0].style.display = "none";
	background45[0].style.display = "none";
	background55[0].style.display = "none";

	setInterval(

		function() {

			if (background55[0].style.display === "none") {

				if (background45[0].style.display === "none") {

					if (background35[0].style.display === "none") {

						if (background25[0].style.display === "none") {

							for (var i = background15.length - 1; i >= 0; i--) {

								background15[i].style.display = "none";
								background25[i].style.display = "block";
								background35[i].style.display = "none";
								background45[i].style.display = "none";
								background55[i].style.display = "none";

							}

						} else {

							for (var i = background15.length - 1; i >= 0; i--) {

								background15[i].style.display = "none";
								background25[i].style.display = "none";
								background35[i].style.display = "block";
								background45[i].style.display = "none";
								background55[i].style.display = "none";

							}

						}

					} else {

						for (var i = background15.length - 1; i >= 0; i--) {

							background15[i].style.display = "none";
							background25[i].style.display = "none";
							background35[i].style.display = "none";
							background45[i].style.display = "block";
							background55[i].style.display = "none";

						}

					}

				} else {

					for (var i = background15.length - 1; i >= 0; i--) {

						background15[i].style.display = "none";
						background25[i].style.display = "none";
						background35[i].style.display = "none";
						background45[i].style.display = "none";
						background55[i].style.display = "block";

					}

				}

			} else {

				for (var i = background15.length - 1; i >= 0; i--) {

					background15[i].style.display = "block";
					background25[i].style.display = "none";
					background35[i].style.display = "none";
					background45[i].style.display = "none";
					background55[i].style.display = "none";

				}

			}

		},

		wait

	);

}

// ================================================================================================================== //
//                                                                                                                    //
//                                               Star Wars Animations 44                                              //
//                                                                                                                    //
// ================================================================================================================== //