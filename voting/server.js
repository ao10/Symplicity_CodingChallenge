const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const prettyjson = require('prettyjson');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const app = express();
const Schema = mongoose.Schema;

//mongodb://admin:password@ds231568.mlab.com:31568/symplicity
const MLAB_URI = "mongodb://admin:password@ds231568.mlab.com:31568/symplicity";
var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    hasVoted: false,
    fruitChoice: String,
})
var fruitSchema = new Schema({
    fruitName: String,
    numVotes: Number,
    voterNames: []
})

var userModel = mongoose.model('user', userSchema)
var fruitModel = mongoose.model('fruit', fruitSchema)
mongoose.connect(MLAB_URI);
var db = mongoose.connection;
//Enable cors and bodyParser so requests can come through
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
}));

//Routes
app.get('/', (req, res) => {
    console.log("GET request received")
});
app.post('/login', function (req, res) {
    //res.send('Login request receieved!')
    var accountInfo = req.body;
    //console.log(accountInfo);
    var accountQuery = userModel.findOne(accountInfo, function (err, result) {
        if (err) return handleError(err);
        if (result == null) {
            console.log("User not found");
            //res.status(404);
            res.status(404).send();
        }
        if (result != null) {
            console.log(result);
            //            console.log(req.body.username);
            (res.status(200).send({
                id: req.body.username
            }));
        }
    });
});
app.post('/register', function (req, res) {
    var postBody = req.body;
    console.log(prettyjson.render(postBody));
    var awesome = new userModel(postBody);
    console.log(awesome);
    awesome.save(function (err) {
        if (err) return handleError(err);
        else res.sendStatus(200);
    });
    //db.save(awesome);
});

app.put('/vote', function (req, res) {
    var alreadyVoted = false;
//    console.log(req.body.vote + req.body.username);
    //Query the fruit and check if the user has already voted.
    var cursor = db.collection('fruits').find().toArray(function(err, result){
        //Iterate each fruit document.
        for (var i = 0; i < result.length; i++){
            if(result[i].voterNames.includes(req.body.username)){
                console.log("ALREADY VOTED.");
                alreadyVoted = true;
            }            
        }
        if (alreadyVoted){
            res.status(405).send({message:"You already voted."})
        }
        else{
            var fruitQuery2 = fruitModel.findOneAndUpdate({"fruitName": req.body.vote},{ $inc: { numVotes: 1 } , "$push": { "voterNames": req.body.username } }
            , function (err, result) {
                //console.log(result);
                res.status(204).send({message:"Vote successful."})
            });
        }
    });

//  console.log(fruitQuery);
// var voteArray = fruitQuery.voterNames.clone();
    //console.log(typeof(voteArray));
//    voteArray.push(req.body.username);
//    result = result.voterNames.push(req.body.username);
})



app.listen(8080, () => console.log('Server listening on port 8080!'));