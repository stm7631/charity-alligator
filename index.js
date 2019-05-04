var baseUrl = 'https://api.data.charitynavigator.org/v2/Organizations?'
var state = '&state=WA'
var city = '&city=Seattle'
var key = '&app_key=623fc447ff759952d021e70b4559a478'
var id = 'app_id=e18f7075'

var query = baseUrl + id + key + state + city

fetch(query)
	.then(function(response){
		return response.json();
	})
	.then(function(myJson){
		console.log(JSON.stringify(myJson));
	});
