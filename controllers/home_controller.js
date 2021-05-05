// module.exports.actionName = function(req, res){};
const Post = require('../models/post');
const User = require('../models/user');
/* module.exports.home = function(req, res){
    // return res.end('<h1>Express is up for Codeial</h1>')
    
    //Post.find({}, function(err, posts){
    //    return res.render('home', {
    //        //context
    //        title: "Codeial | Home",
    //        posts: posts
    //    });
    //});
    
   
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
        User.find({}, function(err, users){
                return res.render('home', {
                    //context
                    title: "Codeial | Home",
                    posts: posts,
                    all_users: users
                });
            });
        
    });
}*/

module.exports.home = async function(req, res){
    
   try{
    // populate the user of each post
    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    });
    let users = await User.find({});

    return res.render('home', {
        //context
        title: "Codeial | Home",
        posts: posts,
        all_users: users
    });
        
   }
   catch(err){
    console.log("Error");
    return;
   }
    
        

}

// using then
// Post.find({}).populate('comments').then(function());

// let posts = Post.find({}).populate('comments').exec();

// posts.then()
