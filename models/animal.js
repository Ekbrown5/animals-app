

const {Schema, model} = mongoose


const animalsSchema = new Schema({
    name: String,
    color: String,
    warm_blooded: Boolean
})


const Animal = model("Animal", animalsSchema)

module.exports = Animal