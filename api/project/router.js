const express = require('express');
const Projects = require('./model'); 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects(); // Assuming Project.getProjects() fetches projects from the database
    const projectsWithProps = projects.map(project => ({
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: !!project.project_completed, // Convert to boolean
    }));
    res.status(200).json(projectsWithProps);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects' });
  }
});


router.post('/', async (req, res) => {
  const projectData = req.body;
  if (!projectData.project_name) {
    return res.status(400).json({ message: 'project_name is required' });
  }
  try {
    const newProject = await Projects.addProject(projectData);
res.status(201).json({
  project_id: newProject.project_id,
  project_name: newProject.project_name,
  project_description: newProject.project_description,
  project_completed: Boolean(newProject.project_completed)
});

  } catch (error) {
    res.status(500).json({ message: error });
  }
});


module.exports = router;
