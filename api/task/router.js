const express = require('express');
const Tasks = require('./model'); // Make sure to import the appropriate model

const router = express.Router();





router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.getTasksWithProjectInfo();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks' });
  }
});


router.post('/', async (req, res) => {
  const taskData = req.body;
  if (!taskData.task_description || !taskData.project_id) {
    return res.status(400).json({ message: 'task_description and project_id are required' });
  }

  // Set task_completed to 0 if not provided
  taskData.task_completed = taskData.task_completed || 0;

  try {
    const newTask = await Tasks.addTask(taskData);
    
    // Convert task_completed to a boolean
    newTask.task_completed = Boolean(newTask.task_completed);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error adding task' });
  }
});


module.exports = router;
