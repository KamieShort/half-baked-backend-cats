const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router().get('/:id', (req, res) => {
  const id = req.params.id;
  const cat = cats.find((item) => item.id === id);
  res.json(cat);
});

module.exports = Router().get('/', (req, res) => {
  const list = cats.map((cat) => {
    return {
      id: cat.id,
      name: cat.name,
    };
  });
  res.json(list);
});
