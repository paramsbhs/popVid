import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js'

//app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json())
// db config
const connection_url = "mongodb+srv://paramsbhs2:Grewal123@popvid.culuc1m.mongodb.net/?retryWrites=true&w=majority&appName=popVid";

mongoose.connect(connection_url)
// api endpoints
app.get('/', (req,res) => res.status(200).send("Hello World"));
app.get('/v1/posts', (req,res) => res.status(200).send(Data));
app.get('/v2/posts', (req,res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});
// listen
app.listen(port, ()=>console.log(`listening on localhost: ${port}`));