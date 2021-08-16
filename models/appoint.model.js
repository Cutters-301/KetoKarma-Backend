const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    dateTime: { type: String },
    telephone: { type: String },

});

const appointModel = mongoose.model("appoint", userSchema);

const seedUserAppoint = () => {
    try {
        const Appoint1 = new appointModel({
            email: "vipmoh88@gmail.com",
            name: "Mohammad Al-Khaleel",
            dateTime: "2021-08-25T10:30",
            telephone: "0787947272",
        });
        const Appoint2 = new appointModel({
            email: "vipmoh88@gmail.com",
            name: "Omaimah Suliman",
            dateTime: "2021-09-12T15:40",
            telephone: "0795566547",
        });
        const Appoint3 = new appointModel({
            email: "vipmoh88@gmail.com",
            name: "Bayan Hmaidy",
            dateTime: "2021-08-27T09:00",
            telephone: "0778965321",
        });
        const Appoint4 = new appointModel({
            email: "vipmoh88@gmail.com",
            name: "Marah Musleh",
            dateTime: "2021-09-25T17:30",
            telephone: "0787985272",
        }); 
        Appoint1.save();
        Appoint2.save();
        Appoint3.save();
        Appoint4.save();

    } catch (error) {
        console.log("Error while creating the user: ", error.message);
      }
};

module.exports = {
    appointModel,
    seedUserAppoint
  };