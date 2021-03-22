const mongoose = require('mongoose')
const Schema = mongoose.Schema

let StudentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    id: {type: Number, required: true, max: 10}
})


module.exports = mongoose.model('Student', StudentSchema)