const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const ToDo = require('./models/ToDo');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ToDoApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// GET ToDo list
app.get('/todolist', async (req, res) => {
    const todolist = await ToDo.find();
    res.json(todolist);
});

// Add item to ToDo list
app.post('/todo/new', (req, res) => {
    const todo = new ToDo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
});

// Delete item from ToDo list
app.delete('/todo/delete/:id', async (req, res) => {
    const deletetodo = await ToDo.findByIdAndDelete(req.params.id);
    res.json(deletetodo);
});

// Change completion status of item in ToDo list
app.put('/todo/update/:id', async (req, res) => {
    const todo = await ToDo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
});

app.listen(3001, () => console.log("Server running on Port 3001"));