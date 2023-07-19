const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
	}
};

fetch('https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));