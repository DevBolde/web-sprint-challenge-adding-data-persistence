const express = require('express');
const Projects = require('./model'); 

const router = express.Router();

// Helper function to format project data
function formatProject(project) {
  return {
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: !!project.project_completed,
  };
}

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    const projectsWithProps = projects.map(formatProject);
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
    // Convert project_completed to a boolean
    newProject.project_completed = Boolean(newProject.project_completed);

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Error adding project' });
  }
});





module.exports = router;

