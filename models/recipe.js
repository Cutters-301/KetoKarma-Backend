class Recipe {
    constructor(item) {
      this.label = item.label;
      this.calories = item.calories;
      this.steps = item.steps;
      this.mealType = item.mealType;
      this.imageURL = item.imageURL;
      this.ingredients = item.ingredients;
    }
  }
  
  module.exports = Recipe;
  










// const mongoose = require("mongoose");

// const RecipeSchema = new mongoose.Schema({
 
//   title: {
//     type: String,
//   },
//   ingredients: {
//     type: Array,
//   },
//   steps: {
//     type:Array,
//   },
//   imageURL: {
//     type:String,
//   },
//   mealType:{
//       type:String,
//   }
// });

// // This creates our model from the above schema, using mongoose's model method
// const RecipeModel = mongoose.model("recipes", RecipeSchema);

// // Export the Article model


// const seedRecipeData =() => {
//     const recipe1 = new RecipeModel({ // create new obj
//                 title: 'Crock Pot Roast',
//                 ingredients: [
//                     {
//                         "quantity": "1",
//                         "name": " beef roast",
//                         "type": "Meat"
//                     },
//                     {
//                         "quantity": "1 package",
//                         "name": "brown gravy mix",
//                         "type": "Baking"
//                     },
//                     {
//                         "quantity": "1 package",
//                         "name": "dried Italian salad dressing mix",
//                         "type": "Condiments"
//                     },
//                     {
//                         "quantity": "1 package",
//                         "name": "dry ranch dressing mix",
//                         "type": "Condiments"
//                     },
//                     {
//                         "quantity": "1/2 cup",
//                         "name": "water",
//                         "type": "Drinks"
//                     }
//                      ],
//                     steps: [
//                         "Place beef roast in crock pot.",
//                         "Mix the dried mixes together in a bowl and sprinkle over the roast.",
//                         "Pour the water around the roast.",
//                         "Cook on low for 7-9 hours."
//                      ],
//                      imageURL: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
//                      mealType:'Breakfast'
                
//             });
//     const recipe2 = new RecipeModel({ // create new obj
//                 title: 'Roasted Asparagus',
//                 ingredients: [
//                     {
//                         "quantity": "1 lb",
//                         "name": " asparagus",
//                         "type": "Produce"
//                     },
//                     {
//                         "quantity": "1 1/2 tbsp",
//                         "name": "olive oil",
//                         "type": "Condiments"
//                     },
//                     {
//                         "quantity": "1/2 tsp",
//                         "name": "kosher salt",
//                         "type": "Baking"
//                     }
//                 ],
//                 steps: [
//                     "Preheat oven to 425°F.",
//                     "Cut off the woody bottom part of the asparagus spears and discard.",
//                     "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).",
//                     "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
//                     "Sprinkle with salt.",
//                     "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
//                     "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
//                     "They should be tender when pierced with the tip of a knife.",
//                     "The tips of the spears will get very brown but watch them to prevent burning.",
//                     "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
//                 ],
//                 imageURL: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
//                 mealType:'Lunch'
//             });
//     const recipe3 = new RecipeModel({ // create new obj
//                 title:'Curried Lentils and Rice',
//                 ingredients: [
//                     {
//                         "quantity": "1 quart",
//                         "name": "beef broth",
//                         "type": "Misc"
//                     },
//                     {
//                         "quantity": "1 cup",
//                         "name": "dried green lentils",
//                         "type": "Misc"
//                     },
//                     {
//                         "quantity": "1/2 cup",
//                         "name": "basmati rice",
//                         "type": "Misc"
//                     },
//                     {
//                         "quantity": "1 tsp",
//                         "name": "curry powder",
//                         "type": "Condiments"
//                     },
//                     {
//                         "quantity": "1 tsp",
//                         "name": "salt",
//                         "type": "Condiments"
//                     }
//                 ],
//                 steps: [
//                     "Bring broth to a low boil.",
//                     "Add curry powder and salt.",
//                     "Cook lentils for 20 minutes.",
//                     "Add rice and simmer for 20 minutes.",
//                     "Enjoy!"
//                 ],                
//                 imageURL: "http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg",
//                 mealType:'Dinner'
//              });


//     recipe1.save(); // save the data into database
//     recipe2.save();
//     recipe3.save();

// }
// module.exports = {RecipeModel,seedRecipeData}

