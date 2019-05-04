"use strict";

(function() {

var charityArray = JSON.parse(sessionStorage.getItem('charityArray'));

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

window.onload = function() {
  for(let i = 0; i < charityArray.length; i++) {
    findCharity('WA', 'Seattle', charityArray[i])
	}
  generateIcons();
}

function generateIcons() {
	$("interests").innerHTML = "";
	for(let i = 0; i < charityArray.length; i++) {
		let newIcon = document.createElement("div");
		let newIconText = document.createElement("p");
		newIconText.appendChild(document.createTextNode(categories[i]));
		newIcon.appendChild(newIconText);
		newIcon.setAttribute("class", "selected");
		newIcon.setAttribute("id", i);
		$("interests").appendChild(newIcon);
	}
}

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

})();
