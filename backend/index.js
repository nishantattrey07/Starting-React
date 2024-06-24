const express = require("express");
const app = express();

router.use(express.json());

const allTodo = []
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

