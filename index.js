const express = require('express');
const app = express();
const port = 3000;
// Here's our test data
var data = require('./data/test.json');

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index', {title:title});
});

app.get('/lakers', (req, res) => {
  var title = 'Lakers Page';
  res.render('pages/lakers', {title:title});
}); 

app.get('/warriors', (req, res) => {
  var title = 'Warriors Page';
  res.render('pages/warriors', {title:title});
});

app.get('/clippers', (req, res) => {
  var title = 'Clippers Page';
  res.render('pages/clippers', {title:title});
});

//list page of users
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});