'use strict';
// const {recipeModel} = require('../models/recipe');
const axios =require('axios');
const { response } = require('express');



const getRecipes = async(request, response )=>{

    const recipe='mango'
    const mealType='Lunch'
    // const queryParams = {
    //     params: {
    //         recipe: recipe,
    //         mealType: mealType
    //     }
    //   };

    const api_url=`https://api.edamam.com/search?q=${recipe}&app_id=ee24950e&app_key=73c472644b670086c57734e05cd20b05&from=0&to=7&calories=591-722&mealType=${mealType}`
    // const { recipe, mealType } = request.query
    
    const allRecipes=await axios.get(api_url)
    // .then(response=>response.send()
    // )
    // .catch(response,err){

    //     console.log(err);
    // }
    return allRecipes.data
    
}




// const getRecipes = (request, response) => {
//     console.log(response);
//     recipeModel.find( (error, user) => { 
//         if (error) {
//             response.send(error)
//         } else {
//             response.send(user)
//             //test git
//         }
//     });
// }
module.exports = {getRecipes}
