require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const { default: MyJobs } = require('../job-portal-client/src/Pages/MyJobs'); // Commented out or removed

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mern-job-portal.79ckakh.mongodb.net/mernJobPortal?retryWrites=true&w=majority&appName=mern-job-portal`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function startServer() {
  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db("mernJobPortal");
    const jobsCollection = db.collection("demoJobs");

    // Define routes
    app.post("/post-job", async (req, res) => {
      try {
        const body = req.body;
        body.createdAt = new Date();
        const result = await jobsCollection.insertOne(body);
        if (result.insertedId) {
          res.status(200).json(result);
        } else {
          res.status(500).json({ message: "Unable to insert job. Try again later." });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobsCollection.find({}).toArray();
        res.json(jobs);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.get('/', (req, res) => {
      res.send('Hello Developer!!');
    });

    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobsCollection.findOne({
        _id: new ObjectId(id)
      });
      res.send(job);
    });

    app.get("/myJobs/:email", async (req, res) => {
      try {
        const jobs = await jobsCollection.find({ postedBy: req.params.email }).toArray();
        res.json(jobs);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.delete("/job/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await jobsCollection.deleteOne(filter);
        if (result.deletedCount === 1) {
          res.json({ acknowledged: true });
        } else {
          res.status(404).json({ acknowledged: false, message: "Job not found" });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.patch("/update-job/:id", async (req, res) => {
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
        res.status(500).json({ message: error.message });
      }
    });

    // Check MongoDB connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Start the server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Exit process if there's an error
  }
}

startServer();

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log("SIGTERM signal received: closing MongoDB connection.");
  await client.close();
  process.exit(0);
});
process.on('SIGINT', async () => {
  console.log("SIGINT signal received: closing MongoDB connection.");
  await client.close();
  process.exit(0);
});
