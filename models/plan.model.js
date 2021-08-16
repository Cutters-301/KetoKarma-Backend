'use strict';

const mongoose = require('mongoose');

const userPlan = new mongoose.Schema({
    Breakfast: {type:String},
    Lunch:{type:String},
    Dinner:{type:String},
    Fruits:{type:String},
    Vegetables:{type:String},
    ownerEmail:{type:String}
})

const userModel = mongoose.model("users",userPlan);

const seedUserData = () => {
const day1 = new userModel({
    Breakfast:'Scrambled eggs',
    Lunch: 'Garlic steak bite salad with targon dressing',
    Dinner:'Keto crack chicken',
    Fruits:'Apples,Avocados',
    Vegetables:'Asparagus, Broccoli',
    ownerEmail: 'marahaltarefe18@gmail.com'
});
const day2 = new userModel({
    Breakfast:'KETO EGGPLANT HASH WITH EGGS',
    Lunch: 'KETO BUFFALO CHICKEN BOWL',
    Dinner:'PESTO BAKED SALMON WITH BROCCOLI',
    Fruits:' Blueberries,Bananas',
    Vegetables:'Bell peppers, Carrots',
    ownerEmail: 'marahaltarefe18@gmail.com'
});
const day3 = new userModel({
    Breakfast:'PORK RIND PANCAKES',
    Lunch: 'KETO MOZZARELLA AND TOMATO STEAK SALAD',
    Dinner:'KETO ASIAN PORK & CAULIFLOWER BOWL',
    Fruits:'Strawberries,Oranges',
    Vegetables:'Cauliflower,Garlic',
    ownerEmail: 'marahaltarefe18@gmail.com'
});
const day4 = new userModel({
    Breakfast:'PUMPKIN SPICE OVERNIGHT OATS',
    Lunch: 'SPICY SHRIMP AVOCADO SALAD',
    Dinner:'KETO ALFREDO ZOODLES WITH BACON',
    Fruits:'kiwifruit',
    Vegetables:'Cucumber,Kale',
    ownerEmail: 'marahaltarefe18@gmail.com'
});
const day5 = new userModel({
    Breakfast:'PANCAKES WITH CREAM CHEESE TOPPING',
    Lunch: 'KETO SALAD SANDWICHES',
    Dinner:'KETO BACON CHEESEBURGER SKILLET',
    Fruits:'Apples,mango',
    Vegetables:'Broccoli,Tomatoes',
    ownerEmail: 'marahaltarefe18@gmail.com'
});
const day6 = new userModel({
    Breakfast:'KETO EGGS BENEDICT',
    Lunch: 'HALLOUMI SALAD WITH MINT DRESSING',
    Dinner:'Keto crack chicken',
    Fruits:'grapes,Avocados',
    Vegetables:'Onions,Carrots',
    ownerEmail: 'marahaltarefe18@gmail.com'
});
const day7 = new userModel({
    Breakfast:'KETO MUSHROOM OMELET',
    Lunch: 'CREAMY KETO TACO SOUP',
    Dinner:'KETO BACON CHEESEBURGER SKILLET',
    Fruits:'Apples,Avocados',
    Vegetables:'Bell peppers,Tomatoes',
    ownerEmail: 'marahaltarefe18@gmail.com'
});

day1.save();
day2.save();
day3.save();
day4.save();
day5.save();
day6.save();
day7.save();
}
module.exports = {userModel , seedUserData}