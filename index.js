"use strict";

(function() {

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
					'Research and Public Policy']

var selectedIcons = [];

window.onload = function(){

	sessionStorage.clear();
	generateIcons();

};

function generateIcons() {
	$("interests").innerHTML = "";
	for(let i = 0; i < categories.length; i++) {
		let newIcon = document.createElement("div");
		let newIconText = document.createElement("p");
		newIconText.appendChild(document.createTextNode(categories[i]));
		newIcon.appendChild(newIconText);
		newIcon.setAttribute("class", "notSelected");
		newIcon.setAttribute("id", i);
		newIcon.onmousedown = select;
		$("interests").appendChild(newIcon);
	}
}

/**
* Whenever a button is clicked, add a shadow to indicate it is selected.
* If clicked again, remove the indicator.
* Send to function to check if the element is in the array.
*/
function select() {
	 if (this.classList.contains("selected")) {
			this.classList.remove("selected");
			this.classList.add("notSelected");
			addIcon(this.id);
	 } else {
			this.classList.add("selected");
			this.classList.remove("notSelected");
			addIcon(this.id);
	 }
}

/**
* Checks to see if element is in the array, adding if not and removing if it is.
* @param {object} id - Element the user has selected.
*/
function addIcon(id) {
	sessionStorage.clear();
	 if (selectedIcons.includes($(id).innerText)) {
			selectedIcons.pop($(id).innerText);
	 } else {
			selectedIcons.push($(id).innerText);
	 }
	 sessionStorage.setItem('charityArray', JSON.stringify(selectedIcons));
	 console.log(selectedIcons)
}

findCharity('WA', 'Seattle', 'Religion')
//pls push
findImage('shane')

function findCharity(state, city, category) {
	var index = categories.indexOf(category) + 1
	var baseUrl = 'https://api.data.charitynavigator.org/v2/Organizations?'
	state = '&state=' + state
	city = '&city=' + city
	var key = '&app_key=623fc447ff759952d021e70b4559a478'
	var id = 'app_id=e18f7075'
	category = '&categoryID=' + index
	var query = baseUrl + id + key + state + city + category
	fetch(query)
	.then(function(response){
		return response.json();
	})
	.then(function(response){

		var obj = JSON.parse(JSON.stringify(response));
		console.log(obj);
		//console.log(JSON.stringify(myJson));
	});
}

/**
* Returns the element that has the ID attribute with the specified value.
* @param {string} id - element ID
* @return {object} DOM object associated with id.
*/
function $(id) {
		return document.getElementById(id);
}

function findImage(search) {
	let serviceKey = '770568ef78cb47fc8179289276a026ff';
	var request = new XMLHttpRequest();
	var url = "https://api.cognitive.microsoft.com/bing/v7.0/images/search"
	url += "?q=" + encodeURIComponent(search);
	request.open("GET", url);
	request.setRequestHeader("Ocp-Apim-Subscription-Key", serviceKey)
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
	console.log(json.value[0].contentUrl);
	console.log('test')
}

})();
