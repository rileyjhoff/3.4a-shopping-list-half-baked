const { Router } = require('express');
const Item = require('../models/Item');
const authenticate = require('../middleware/authenticate');

module.exports = Router().get('/', authenticate, async (req, res) => {
  const items = await Item.getAll(req.user.id);
  res.json(items);
});

// TO DO - implement items CRUD
