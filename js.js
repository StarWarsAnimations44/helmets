// ================================================================================================================== //
//                                                                                                                    //
//                                                Star Wars Animations 44                                             //
//                                                                                                                    //
// ================================================================================================================== //

var backgroundIsDisplayed = true;
var sources = [];
var displayedBackgroundColor = "transparent";
var hiddenBackgroundColor = "#ffffff";
const backgroundElements = document.getElementsByClassName("background");
const buttonsList = document.getElementsByTagName("button");

function basculerArrierePlan() {

	"use strict";

	if (backgroundIsDisplayed) {

		backgroundIsDisplayed = false;

		for (var i = 0; i < buttonsList.length; i++) {

			buttonsList[i].style.backgroundColor = hiddenBackgroundColor;

		}

		for (var j = 0; j < backgroundElements.length; j++) {

			sources[j] = backgroundElements[j].src;
			backgroundElements[j].src = "mod/void.png";

		}

	} else {

		backgroundIsDisplayed = true;

		for (var k = 0; k < buttonsList.length; k++) {

			buttonsList[k].style.backgroundColor = displayedBackgroundColor;

		}

		for (var m = 0; m < backgroundElements.length; m++) {

			backgroundElements[m].src = sources[m];

		}

	}

}

function englishAubresh() {

	"use strict";

	const titleAurbesh = document.querySelector("#titleAurbesh");
	const titleEnglish = document.querySelector("#titleEnglish");
	titleAurbesh.style.display = "none";
	titleEnglish.style.display = "block";

	setInterval(

		function() {

			if (titleAurbesh.style.display === "none") {

				titleAurbesh.style.display = "block";
				titleEnglish.style.display = "none";

			} else {

				titleAurbesh.style.display = "none";
				titleEnglish.style.display = "block";

			}

		},

		1500

	);

}

// ================================================================================================================== //
//                                                                                                                    //
//                                               Star Wars Animations 44                                              //
//                                                                                                                    //
// ================================================================================================================== //