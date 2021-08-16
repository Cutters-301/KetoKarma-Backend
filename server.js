const express = require('express') // require the express package
const app = express() // initialize your express app instance
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001
const MONGO_DB_URL =process.env.MONGO_DB_URL;
const {yourDietPlan} = require('./controllers/plan.controller');
const {seedUserData} = require('./models/plan.model');

app.use(cors());
app.use(express.json());

mongoose.connect(`${MONGO_DB_URL}/plan`, { useNewUrlParser: true, useUnifiedTopology: true });

seedUserData();
app.get('/plan',yourDietPlan);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});