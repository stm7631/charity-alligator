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
