const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://tiwaripiyush:piyush$tiwari@cluster0.m4kgq.mongodb.net/ProjectBlogPhase2?authSource=admin&replicaSet=atlas-14frn7-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")
    .catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});