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
    email: String
    //hasVoted: false,
    //fruitChoice: {Apple, Banana, Orange, Pear}
})
var fruitSchema = new Schema({
    fruitName: String,
    numVotes: String,
    voteNames: []
})

var userModel = mongoose.model('user', userSchema)
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
            res.sendStatus(404);
        }
        if (result != null) {
            console.log(result);
            res.sendStatus(200);
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


app.listen(8080, () => console.log('Server listening on port 8080!'));