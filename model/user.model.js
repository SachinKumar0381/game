const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
        "name" : String,
        "score" : Number,
        "level" : String
});

const userModel = new mongoose.model("game",userSchema);

module.exports = userModel;