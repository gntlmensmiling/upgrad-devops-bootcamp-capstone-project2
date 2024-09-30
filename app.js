const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [];

// Create
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

// Read
app.get('/users', (req, res) => {
    res.send(users);
});

// Update
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) return res.status(404).send('User not found');
    users[userIndex] = req.body;
    res.send(users[userIndex]);
});

// Delete
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(u => u.id !== id);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server is running on port \${PORT}\`);
});