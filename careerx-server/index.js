require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@careerx.rtsyfdc.mongodb.net/?retryWrites=true&w=majority&appName=careerx`;

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
    await client.connect();

    const db = client.db("careerx");
    const jobsCollection = db.collection("jobs");

    app.post('/post-job', async (req, res) => {
        const job = req.body;
        job.createAt = new Date();
        const result = await jobsCollection.insertOne(job);
        if(result.insertedId) {
            return res.status(200).send(result);
        } else {
            return res.status(400).send({
                message : 'Failed to insert job',
                status : false
            });
        }

    })

    app.get('/all-jobs', async (req, res) => {
        const jobs = await jobsCollection.find({}).toArray();
        res.send(jobs)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})