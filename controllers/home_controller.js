// module.exports.actionName = function(req, res){};
const Post = require('../models/post');

module.exports.home = function(req, res){
    // return res.end('<h1>Express is up for Codeial</h1>')
    
    /*Post.find({}, function(err, posts){
        return res.render('home', {
            //context
            title: "Codeial | Home",
            posts: posts
        });
    });
    */
   
    // populate the user of each post
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
        return res.render('home', {
            //context
            title: "Codeial | Home",
            posts: posts
        });
    });
}