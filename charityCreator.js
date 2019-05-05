"use strict";

(function() {

var charityArray = JSON.parse(sessionStorage.getItem('charityArray'));

var photoLink;

var categories = ['Animals',
					'Arts, Culture, Humanities',
					'Education',
					'Environment',
					'Health',
					'Human Services',
					'International',
					'Human and Civil Rights',
					'Religion',
					'Community Development',
					'Research and Public Policy'];

window.onload = function() {
  for(let i = 0; i < charityArray.length; i++) {
    findCharity('WA', 'Seattle', charityArray[i]);
	}
  generateIcons();
}

function generateIcons() {
	$("interests").innerHTML = "";
	for(let i = 0; i < charityArray.length; i++) {
		let newIcon = document.createElement("div");
		let newIconText = document.createElement("p");
		newIconText.appendChild(document.createTextNode(charityArray[i]));
		newIcon.appendChild(newIconText);
		newIcon.setAttribute("class", "selected");
		newIcon.setAttribute("id", i);
		$("interests").appendChild(newIcon);
	}
}

function findCharity(state, city, category) {
	var index = categories.indexOf(category) + 1;
	var baseUrl = 'https://api.data.charitynavigator.org/v2/Organizations?';
	state = '&state=' + state;
	city = '&city=' + city;
	var key = '&app_key=623fc447ff759952d021e70b4559a478';
	var id = 'app_id=e18f7075';
	category = '&categoryID=' + index;
	var query = baseUrl + id + key + state + city + category;
	fetch(query)
	.then(function(response){
		return response.json();
	})
	.then(function(response){

		var obj = JSON.parse(JSON.stringify(response));
		console.log(obj);
		populateCharities(obj);
	});
}

function populateCharities(responseObj) {

	for(let i = 0; i < responseObj.length; i++) {
    console.log(responseObj[i]);
    let newIcon = document.createElement("div");
    let newIconPic = document.createElement("img");
    findImage(responseObj[i].organization.charityName);
    console.log(photoLink);
    newIconPic.src = photoLink;
    newIconPic.setAttribute("class", "charityimg");
    let newIconTagDiv = document.createElement("div");
    newIconTagDiv.setAttribute("class", "tags");
		let newIconTagDivName = document.createElement("p");
		newIconTagDiv.appendChild(document.createTextNode(responseObj[i].category.categoryName));
    newIcon.appendChild(newIconPic);
    let newIconTitle = document.createElement("p");
    newIconTitle.appendChild(document.createTextNode(responseObj[i].organization.charityName));
    newIcon.appendChild(newIconTitle);
    newIcon.appendChild(newIconTagDiv);
		newIcon.setAttribute("class", "charity");
		$("charities").appendChild(newIcon);
	}
}

function findImage(search, responseObj) {
	let serviceKey = '770568ef78cb47fc8179289276a026ff';
	var request = new XMLHttpRequest();
	var url = "https://api.cognitive.microsoft.com/bing/v7.0/images/search"
	url += "?q=" + encodeURIComponent(search);
	request.open("GET", url, false);
	request.setRequestHeader("Ocp-Apim-Subscription-Key", serviceKey);
	request.setRequestHeader("Accept", "application/json");
	request.addEventListener("load", handleResponse);
	request.addEventListener("error", function() {
        renderErrorMessage("Error completing request");
    });
    request.addEventListener("abort", function() {
        renderErrorMessage("Request aborted");
    });
    request.send();
}

function handleResponse() {
	var json = this.responseText.trim();
	json = JSON.parse(json);
	photoLink = json.value[0].thumbnailUrl;
}

/**
* Returns the element that has the ID attribute with the specified value.
* @param {string} id - element ID
* @return {object} DOM object associated with id.
*/
function $(id) {
		return document.getElementById(id);
}

})();
