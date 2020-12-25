const express = require("express");
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
const workout = require('./routes/workout');

mongoose.connect('mongodb+srv://felixzandereriksson:Jesper.nu1@cluster0.9idaz.mongodb.net/mygym', { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('connected to MongoDB..'))
.catch(err => console.error('could not connect', err))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({origin: true, credentials: true}))
app.use('/', workout);

const server = app.listen(3456, () => console.log("port 3456"));