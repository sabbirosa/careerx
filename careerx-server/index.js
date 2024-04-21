require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@careerx.rtsyfdc.mongodb.net/?retryWrites=true&w=majority&appName=careerx`;

// Connect to MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

connectToMongoDB();

// Middleware to check MongoDB connection
app.use((req, res, next) => {
  if (!client.topology.isConnected()) {
    return res.status(500).json({ error: "MongoDB connection not established yet. Please try again later." });
  }
  next();
});

// Routes
app.post('/post-job', async (req, res) => {
  const db = client.db("careerx");
  const jobsCollection = db.collection("jobs");
  
  const body = req.body;
  body.createAt = new Date();
  
  try {
    const result = await jobsCollection.insertOne(body);
    return res.status(200).send(result);
  } catch (error) {
    console.error("Failed to insert job:", error);
    return res.status(400).send({
      message : 'Failed to insert job',
      status : false
    });
  }
});

app.get('/all-jobs', async (req, res) => {
  const db = client.db("careerx");
  const jobsCollection = db.collection("jobs");
  
  try {
    const jobs = await jobsCollection.find().toArray();
    res.send(jobs);
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// Get a job by ID
app.get('/all-jobs/:id', async (req, res) => {
  const db = client.db("careerx");
  const jobsCollection = db.collection("jobs");

  try {
    const id = req.params.id;
    const job = await jobsCollection.findOne({ _id: new ObjectId(id)});
    res.send(job);
  } catch (error) {
    console.error("Failed to fetch job:", error);
    res.status(500).json({ error: "Failed to fetch job" });
  }
});

// Get all jobs by email address
app.get('/myJobs/:email', async (req, res) => {
  const db = client.db("careerx");
  const jobsCollection = db.collection("jobs");

  try {
    const jobs = await jobsCollection.find({ postedBy: req.params.email }).toArray();
    res.send(jobs);
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }

});

app.delete('/deleteJob/:id', async (req, res) => {
  const db = client.db("careerx");
  const jobsCollection = db.collection("jobs");

  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await jobsCollection.deleteOne(filter);
    res.send(result);
  } catch (error) {
    console.error("Failed to delete job:", error);
    res.status(500).json({ error: "Failed to delete job" });
  }
});

app.patch('/updateJob/:id', async (req, res) => {
  const db = client.db("careerx");
  const jobsCollection = db.collection("jobs");

  try {
    const id = req.params.id;
    const jobData = req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        ...jobData
      },
    };
    const result = await jobsCollection.updateOne(filter, updateDoc, options);
    res.send(result);
    
  } catch (error) {
    console.error("Failed to update job:", error);
    res.status(500).json({ error: "Failed to update job" });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
