const Jokes = require('../../models/jokes');

const controller = {};

// create method here
controller.create = (req, res) => {
  const  text = req.body.text;
          
 Jokes.
    create(text)
    .then(data => res.json(data))
    .catch(err => console.log('Update error: ', err));
};

controller.update = (req, res) => {
  const  text = req.body.text,
          id = req.body.id;
 
   Jokes.update(text,id)
    .then(data => res.json(data))
    .catch(err => console.log('Update error: ', err));
};

module.exports = controller;