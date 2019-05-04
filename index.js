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

window.onload = function(){

	generateIcons();

};

function generateIcons() {
	$("interests").innerHTML = "";
	for(let i = 0; i < list.books.length; i++) {
		let newBook = document.createElement("div");
		let newBookImg = document.createElement("img");
		newBookImg.src= "books\" + list.books[i].folder + "\cover.jpg"
		let newBookTitle = document.createElement("p");
		newbookTitle.appendChild(document.createTextNode(list.books[i].title));
		newBook.appendChild(newBookImg);
		newBook.appendChild(newBookTitle);
		newBook.addEventListener("click", function(){
				//SOMETHING
		});
		$("allbooks").appendChild(newBook);
	}
}

findCharity('WA', 'Seattle', 'Religion')
//pls push

function findCharity(state, city, category) {
<<<<<<< HEAD
=======
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
>>>>>>> 438441cbaadf14b086b9b848c83f98b0d71e718b
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
<<<<<<< HEAD
* Returns the element that has the ID attribute with the specified value.
* @param {string} id - element ID
* @return {object} DOM object associated with id.
*/
function $(id) {
		return document.getElementById(id);
=======
* Clear all cards from previous games. User can select how many cards they want generated.
* For each card, give card attributes, call a function that assigns patterns, make clickable,
* and add to game box.
*/
function generateCards() {
	 $("game").innerHTML = "";
	 let cardAmount;
	 if (!qs("input").checked) {
			cardAmount = 12;
	 } else {
			cardAmount = 9;
	 }
	 for (let i = 0; i < cardAmount; i++) {
			let node = document.createElement("div");
			node.setAttribute("class", "card");
			setImgId(node);
			node.onmousedown = select;
			$("game").appendChild(node);
	 }
}

/**
* Whenever a card is clicked, add a shadow to indicate it is selected.
* If clicked again, remove the indicator.
* Send to function to check if the element is in the array.
*/
function select() {
	 if (this.classList.contains("selected")) {
			this.classList.remove("selected");
			addSet(this.id);
	 } else {
			this.classList.add("selected");
			addSet(this.id);
	 }
	 if (setSelect.length == 3) {
			set();
			setTimeout(function() {
				 setSelect = Array();
			}, 1000);
	 }
}

/**
* Checks to see if element is in the array, adding if not and removing if it is.
* @param {object} id - Element the user has selected.
*/
function addSet(id) {
	 if (setSelect.includes(id)) {
			setSelect.pop(id);
	 } else {
			setSelect.push(id);
	 }
>>>>>>> 438441cbaadf14b086b9b848c83f98b0d71e718b
}
