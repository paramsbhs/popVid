import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Data from './data.js';
import Videos from './dbModel.js'

// Load environment variables in development
dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// db config - Use environment variable with fallback and validation
const connection_url = process.env.MONGODB_URI;

// Debug: Check if environment variable is loaded
console.log('MONGODB_URI exists:', !!connection_url);
console.log('MONGODB_URI preview:', connection_url ? connection_url.substring(0, 20) + '...' : 'undefined');

// Validate connection string
if (!connection_url) {
    console.error('❌ MONGODB_URI environment variable is not set!');
    console.log('Please create a .env file with MONGODB_URI or set the environment variable');
    process.exit(1);
}

if (!connection_url.startsWith('mongodb://') && !connection_url.startsWith('mongodb+srv://')) {
    console.error('❌ Invalid MongoDB connection string format!');
    console.error('Connection string should start with "mongodb://" or "mongodb+srv://"');
    console.error('Current value preview:', connection_url.substring(0, 50));
    process.exit(1);
}

mongoose.connect(connection_url)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });

// api endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));
app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', async (req, res) => {
    try {
        const data = await Videos.find({});
        res.status(200).send(data);
    } catch (err) {
        console.error('Error fetching videos:', err);
        res.status(500).send(err);
    }
});

app.post('/v2/posts', async (req, res) => {
    const dbVideos = req.body;

    try {
        const data = await Videos.create(dbVideos);
        res.status(201).send(data);
    } catch (err) {
        console.error('Error creating video:', err);
        res.status(500).send(err);
    }
});

// listen
app.listen(port, () => console.log(`🚀 Server listening on port: ${port}`));