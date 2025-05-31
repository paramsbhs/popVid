import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js'

//app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
});
// db config
const connection_url = "mongodb+srv://paramsbhs2:Grewal123@popvid.culuc1m.mongodb.net/?retryWrites=true&w=majority&appName=popVid";

mongoose.connect(connection_url)
// api endpoints
app.get('/', (req,res) => res.status(200).send("Hello World"));
app.get('/v1/posts', (req,res) => res.status(200).send(Data));
app.get('/v2/posts', async (req, res) => {
    try {
        const data = await Videos.find({});
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});
app.post('/v2/posts', async (req, res) => {
    const dbVideos = req.body;

    try {
        const data = await Videos.create(dbVideos);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});
// listen
app.listen(port, ()=>console.log(`listening on localhost: ${port}`));