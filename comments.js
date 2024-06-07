// create web server
// create express object
var express = require('express');
var app = express();
// create body-parser object
var bodyParser = require('body-parser');
// create mongoose object
var mongoose = require('mongoose');
// create comments model
var Comments = require('./comments.model');
// create db object
var db = 'mongodb://localhost/comments';
// connect to db
mongoose.connect(db);
// define port
var port = 8080;
// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// create route
app.get('/', function(req, res) {
    res.send('happy to be here');
});
// create route to get comments
app.get('/comments', function(req, res) {
    console.log('Get request for all comments');
    Comments.find({})
        .exec(function(err, comments) {
            if (err) {
                console.log('Error retrieving comments');
            } else {
                res.json(comments);
            }
        });
});
// create route to get single comment
app.get('/comments/:id', function(req, res) {
    console.log('Get request for a single comment');
    Comments.findById(req.params.id)
        .exec(function(err, comment) {
            if (err) {
                console.log('Error retrieving comment');
            } else {
                res.json(comment);
            }
        });
});
// create route to post comments
app.post('/comment', function(req, res) {
    console.log('Post a comment');
    var newComment = new Comments();
    newComment.name = req.body.name;
    newComment.comment = req.body.comment;
    newComment.save(function(err, insertedComment) {
        if (err) {
            console.log('Error saving comment');
        } else {
            res.json(insertedComment);
        }
    });
});
// create route to update comments
app.put('/comment/:id', function(req, res) {
    console.log('Update a comment');
    Comments.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                comment: req.body.comment
            }
        }, {
            new: true
        },
        function(err, updatedComment) {
            if (err) {
                res.send('Error updating comment');
            } else {
                res.json(updatedComment);
            }
        });
});
// create route to delete comments
app.delete('/comment/:id', function(req, res) {
    console