const express=require('express');
var app =express();//make a new express app

//setup public as a static directory that are acessibly outside the server
app.use(express.static(__dirname+'/public'));
//set http route handelers for root:
app.get('/', (req, res) =>
{
  res.send('Hello Express');
});


//set http route handelers for /about:
app.get('/about', (req, res) =>
{
  res.send('About page');
});


app.get('/bad', (req, res) =>
{
  res.send({error:'Bad request'});
});

//start the server
app.listen(3000);
