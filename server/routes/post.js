const express = require('express') 

const router = express.Router() 

router.get('/', (req, res) => {
  res.json({
    response: 'this is a very big test',
  });
});   

module.exports = router