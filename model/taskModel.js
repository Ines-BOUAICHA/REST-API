const mongoose = require('mongoose')

const {Schema,model} = mongoose
const schemaTask=new Schema ({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    phone: {type: Number, required: true}
})
const tasks=model("tasks", schemaTask)

module.exports =tasks