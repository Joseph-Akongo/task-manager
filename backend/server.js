const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Admin:TawS2C1zGt8OEp0f@cluster0.absu1h9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use(bodyParser.json());

// Connect to MongoDB 
mongoose.connect('mongodb+srv://Admin:<password>@cluster0.absu1h9.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for tasks
const taskSchema = new mongoose.Schema({
    text: String,
});

// Create a Task model using the schema
const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/tasks', async (req, res) => {ch
    const newText = req.body.text;
    try {
        const newTask = new Task({ text: newText });
        await newTask.save();
        res.status(201).json({ message: 'Task added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
