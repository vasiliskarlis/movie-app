var program = require('commander');
var fetch = require('node-fetch');

program
  .version('0.1.0')
  .option('--imdbID [id]', 'Add the specified movie id [ouaou]', 'ouaou')
  .parse(process.argv);
let y = 'http://www.omdbapi.com/?i=' + program.imdbID + '&apikey=8e7cd55'

fetch(y)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log('Title: ' + json.Title);
        console.log('Year: ' + json.Year);
        console.log('Rated: ' + json.Rated);
        console.log('Released: ' + json.Released);
        console.log('Runtime: ' + json.Runtime);

    });

/* den exw valei afto akoma:Note	that	you	have	to	check	if	the	user	submits	an	id	argument
otherwise	log	a	message	to	the	user.
*/
