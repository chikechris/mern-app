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
