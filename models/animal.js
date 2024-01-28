const {Schema, model} = require("./connection")


const animalsSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})


const Animal = model("Animal", animalsSchema)

module.exports = Animal