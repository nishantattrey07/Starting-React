const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

const allTodo = [
    {
        "title": "Title 1",
        "description": "Description 1",
        "completed": false
    },
    {
        "title": "Title 2",
        "description": "Description 2",
        "completed": false
    }
]
app.post('/addtodo', (req, res) => {
    const { todo } = req.body;
    console.log(todo);
    allTodo.push(todo);
    res.send('Data received');
})

app.get('/todos', (req, res) => {
    res.send(allTodo);
})

app.put('/completed', (req, res) => { 
    const { id } = req.body;
    allTodo[id].completed = true;
    res.send('Data received');
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

