axios.post("getPostedUrl.php", {
	enlace : "https://pokeapi.co/api/v2/pokemon/1/"
}).then(function (response) {
	console.log(response.data.name);
}).catch(function (error) {
	console.log(error);
});