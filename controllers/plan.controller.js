'use strict';

const { userModel } = require('../models/plan.model');

const yourDietPlan = (request, response) => {
  const { email } = request.query;
  console.log(request.query.email, 'hi');
  userModel.find({ ownerEmail: email }, (error, user) => {
    if (error) {
      response.send(error);
    } else {
      response.json(user);
    }
  });
};

const createPlan = (req, res) => {
  const Breakfast = req.body.Breakfast;
  const Lunch = req.body.Lunch;
  const Dinner = req.body.Dinner;
  const Fruits = req.body.Fruits;
  const Vegetables = req.body.Vegetables;
  const ownerEmail = req.body.ownerEmail;

  const newPlanObj = new userModel({
    Breakfast,
    Lunch,
    Dinner,
    Fruits,
    Vegetables,
    ownerEmail: ownerEmail,
  });
  console.log(newPlanObj);
  newPlanObj.save();
  res.json(newPlanObj);
};

const deletePlan = (req, res) => {
  const id = req.params.plan_id;
  // console.log(id);

  userModel.deleteOne({ _id: id }, (error, plan) => {
    res.json(plan.deletedCount);
  });
};

const updatePlan = async (req, res) => {
  const planId = req.params.plan_id;
  const { Breakfast, Lunch, Dinner, Fruits, Vegetables } = req.body;

  userModel.findByIdAndUpdate(
    { _id: planId },
    {
      Breakfast: Breakfast,
      Lunch: Lunch,
      Dinner: Dinner,
      Fruits: Fruits,
      Vegetables: Vegetables,
    },
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
};

module.exports = { yourDietPlan, createPlan, deletePlan, updatePlan };
