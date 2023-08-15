// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model'); 

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const resource = await Resource.getResource();
    res.json(resource);
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res) => {
  const resourceData = req.body;
  if (!resourceData.resource_name) {
    return res.status(400).json({ message: 'resource_name is required' });
  }

  try {
    const newResource = await Resource.addResource(resourceData);
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: 'Error adding resource' });
  }
});


module.exports = router;
