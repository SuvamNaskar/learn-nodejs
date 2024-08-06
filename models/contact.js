const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myNewApp");

const contactSchema = mongoose.Schema({
    email: String,
    query: String
})

module.exports = mongoose.model("contact", contactSchema);