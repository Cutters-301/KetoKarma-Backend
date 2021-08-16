const { appointModel } = require('../models/appoint.model');


const bookAppoint = async (req, res) => {
    const { email } = req.query.email;

    appointModel.find({ email: email }, (err, userAppoint) => {

        if (err) {
            res.send(err);
        } else {
            res.json(userAppoint);
        }
    });
}

const createAppoint = async (req, res) => {

    const {
        name,
        dateTime,
        telephone, } = req.body;

    const newAppointObj = new appointModel({
        name: name,
        dateTime: dateTime,
        telephone: telephone
        
    });
    newAppointObj.save();

    res.json(newAppointObj);
}

module.exports = {
    bookAppoint,
    createAppoint
}