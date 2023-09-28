const mongoose = require('mongoose')

const TodoShema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodoShema)
module.exports = TodoModel