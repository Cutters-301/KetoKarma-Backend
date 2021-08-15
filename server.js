const express = require('express') // require the express package
const app = express() // initialize your express app
const PORT = process.env.PORT
require('dotenv').config();
const cors = require('cors');
const mongoose = require("mongoose");
const {seedRecipeData} = require('./models/recipe');
const {getRecipes}=require('./controller/recipe-controller')
mongoose.connect('mongodb://omaimah:0000@cluster0-shard-00-00.rzey7.mongodb.net:27017,cluster0-shard-00-01.rzey7.mongodb.net:27017,cluster0-shard-00-02.rzey7.mongodb.net:27017/recipe?ssl=true&replicaSet=atlas-nc0ndg-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
// mongoose.connect("mongodb://localhost:27017/recipes", { useNewUrlParser: true,useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

seedRecipeData();

app.get('/recipes',getRecipes);

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.listen(3002, () => {

  console.log(`Server started on ${PORT}`);
});