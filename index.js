findCharity('WA', 'Seattle', 'Religion')
//pls push

function findCharity(state, city, category) {
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
