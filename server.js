const express = require('express');
const nunjucks = require('nunjucks');
const recipeData = require('./data');

const server = express();
server.use(express.static('public'));
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express:server,
  autoescape: false,
  noCache: true
});

server.get('/', function(req, res){
  return res.render('main', {recipes: recipeData});
});

server.get('/main', function(req, res){
  return res.render('main', {recipes: recipeData});
});

server.get('/about', function(req, res) {
  return res.render('about');
});

server.get('/recipes', function(req, res) {
  return res.render('recipes', {recipes: recipeData});
});

server.get('/recipes/:id', function(req, res) {
  const recipeIndex = req.params.id;
  if(recipeIndex < recipeData.length){
    return res.render('recipe-detail', {recipe: recipeData[recipeIndex]});
  } else {
    return res.send('Recipe not found...');
  }
});

server.listen(1337, function() {
  console.log('The Foodfy server is runnig...');
});

