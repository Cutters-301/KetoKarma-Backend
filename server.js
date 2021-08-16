const express = require('express') // require the express package
const app = express() // initialize your express app
require('dotenv').config();
const axios =require('axios');
// const {recipe} = require('./models/recipe')
// const PORT = process.env.PORT;
const cors = require('cors');
// const mongoose = require("mongoose");
const {Recipe} = require('./models/recipe');

// const {getRecipes}=require('./controller/recipe-controller')
// mongoose.connect('mongodb://omaimah:0000@cluster0-shard-00-00.rzey7.mongodb.net:27017,cluster0-shard-00-01.rzey7.mongodb.net:27017,cluster0-shard-00-02.rzey7.mongodb.net:27017/recipe?ssl=true&replicaSet=atlas-nc0ndg-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
const PORT = process.env.PORT;
const RECIPE_URL =process.env.RECIPE_URL;
const RECIPE_ID = process.env.RECIPE_ID;
const RECIPE_KEY =process.env.RECIPE_KEY;

// mongoose.connect("mongodb://localhost:27017/recipes", { useNewUrlParser: true,useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

// seedRecipeData();
app.get('/recipe', async (req, res) => {
  
  const { recipe, mealType } = req.query; /// get the query parameters form the URL, using destructuring assignment
  // console.log(req.query.mealType);
  try {
  // way number 1 concatenation
  // const response = axios.get(`${WEATHERBIT_URL}?key=${WEATHERBIT_KEY}&lat=${lat}&lon=${lon}`);

  // way number is using the object params argument
  const queryParams = {
    params: {
      recipe: recipe,
      id: RECIPE_ID,
      key: RECIPE_KEY,
      mealType: mealType,
    }
  };
  const response = await axios.get(RECIPE_URL, queryParams);
  console.log(response);
  const data = response.data.hits.map(item => new Recipe (item));
  res.json(data);
  }
  catch(err){
    res.send(err);
  }
});

// app.get('/recipes',getRecipes);

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.listen(3002, () => {

  console.log(`Server started on ${PORT}`);
});