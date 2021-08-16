'use strict';


const {userModel} = require('../models/plan.model');


const yourDietPlan = (request, response) => {

    const { email } = request.query;
    console.log(request.query.email,'hi');
    userModel.find({ ownerEmail: email }, (error, user) => { 
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}
module.exports = {yourDietPlan};