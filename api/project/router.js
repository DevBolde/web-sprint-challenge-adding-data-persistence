const express = require('express');
const Projects = require('./model'); 

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getProjects();
    res.json(projects);
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res) => {
  const projectData = req.body;
  if (!projectData.project_name) {
    return res.status(400).json({ message: 'Project name is required' });
  }

  try {
    const newProject = await Projects.addProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Error adding project' });
  }
});

// Add other routes and functions for handling project-related requests as needed

module.exports = router;
