const express = require('express') // require the express package
const app = express() // initialize your express app instance
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT 
const MONGO_DB_URL =process.env.MONGO_DB_URL;
const {yourDietPlan} = require('./controllers/plan.controller');
const {seedUserData} = require('./models/plan.model');

const {bookAppoint, createAppoint} = require('./controllers/appoint.controller');
const {seedUserAppoint} = require('./models/appoint.model');

const {seedRecipeData} = require('./models/recipe');
const {getRecipes}=require('./controller/recipe-controller')
mongoose.connect('mongodb://omaimah:0000@cluster0-shard-00-00.rzey7.mongodb.net:27017,cluster0-shard-00-01.rzey7.mongodb.net:27017,cluster0-shard-00-02.rzey7.mongodb.net:27017/recipe?ssl=true&replicaSet=atlas-nc0ndg-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
// mongoose.connect("mongodb://localhost:27017/recipes", { useNewUrlParser: true,useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

mongoose.connect(`${MONGO_DB_URL}/plan`, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(`${MONGO_DB_URL}/appoints`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})


seedUserData();
app.get('/plan',yourDietPlan);


seedRecipeData();

app.get('/recipes',getRecipes);


seedUserAppoint();

app.get('/appoints', bookAppoint);
app.post('/appoint', createAppoint);

app.listen(PORT, () => {

  console.log(`Server started on ${PORT}`);
});