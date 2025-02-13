const mongoose = require("mongoose");

// Beer Schema
const BeerSchema = new mongoose.Schema({
    name: String,
    price: Number,
    change: Number
});

// User Schema (Username + IP restriction)
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    ip: String
});

const Beer = mongoose.model("Beer", BeerSchema);
const User = mongoose.model("User", UserSchema);

module.exports = { Beer, User };
