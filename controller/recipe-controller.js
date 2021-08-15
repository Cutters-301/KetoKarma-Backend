'use strict';


const {recipeModel} = require('../models/recipe');

const getRecipes = (request, response) => {
    console.log(response);
    recipeModel.find( (error, user) => { 
        if (error) {
            response.send(error)
        } else {
            response.send(user)
        }
    });
}
module.exports = {getRecipes}
