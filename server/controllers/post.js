const Post = require('../models/post');
const slugify = require('slugify');

exports.create = (req, res) => {
  // console.log(req.body);
  const {title, content, user} = req.body
  const slug = slugify(title)

  // validate
  switch(true) {
    case !title:
    return res.status(400).json({error: 'title needed'})
    break;
    case !content:
      return res.status(400).json({ error: 'content needed' })
      break;

  }
  // create new post
  // res.json({message: 'See the console'})
  Post.create({title, content, user, slug}, (err, post) => {
    if(err) {
      console.log(err)
      res.status(400).json({error: 'Post exist. Use another title'})
    }
    res.json(post)
  })
}; 

exports.list = (req, res) => {
  Post.find({})
  .limit(10) 
  .sort({createdAt: -1})
  .exec((err, posts) => {
    if(err) console.log(err) 
    res.json(posts)
  })
} 

exports.read = (req, res) => { 
  const {slug} = req.params 
  // console.log(req.params.slug)
  Post.findOne({slug})
    .exec((err, post) => {
      if (err) console.log(err)
      res.json(post)
    })
}
