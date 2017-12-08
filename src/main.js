
let test =  'hellohellohellohello' ;
console.log("paixtara mou");

    var fetch = require('node-fetch');

    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=8e7cd55')
    .then(function(res) {
        return res.text();
        //console.log(res.Title);
    }).then(function(body) {
        console.log(body);


        });


  /*
  fetch('http://www.omdbapi.com/?i=tt3896198&apikey=8e7cd55')
  .then(function(res) {
      return res.text();
  }).then(data =>{
    var mydata = JSON.parse(data);
    alert(mydata.Title)
  }
   );
*/
