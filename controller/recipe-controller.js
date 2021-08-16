'use strict';
// const {recipeModel} = require('../models/recipe');
const axios =require('axios');
const { response } = require('express');



const getRecipes =  (request, response )=>{

    const recipe='mango'
    const mealType='Lunch'
    const queryParams = {
        params: {
            app_id: 'ee24950e',
            recipe: recipe,
            mealType: mealType,
            app_key: '73c472644b670086c57734e05cd20b05',
            from: '0',
            to: '7',
            calories: '591-722',


        }
      };
    // const { recipe, mealType } = request.query
    
    //  const api_url=`https://api.edamam.com/search`
    //  const link = (api_url, queryParams)
        
    // const allRecipes =  axios.get(link)
    // .then(response => {response.send()}
    // )
    // .catch((response,erorr)=>{
    //     response.send(error)
    // })
     
    
    // const json= allRecipes.data.json();
//   response.json(allRecipes.data);
// console.log(allRecipes.data);
    // response.json(allRecipes.data);
    
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
// module.exports = {getRecipes}
