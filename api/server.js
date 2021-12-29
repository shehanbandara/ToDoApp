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

app.listen(3001, () => console.log("Server running on Port 3001"));