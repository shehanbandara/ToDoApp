const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("ToDo", ToDoSchema);