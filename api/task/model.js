const db = require('../../data/dbConfig');

async function addTask(task) {
  return db('tasks')
    .insert(task)
    .then(([task_id]) => {
      return db('tasks').where('task_id', task_id).first();
    });
}

async function getTasksWithProjectInfo() {
  const tasks = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed', // Keep the task_completed as is
      'p.project_name',
      'p.project_description'
    );

  const tasksWithConvertedCompleted = tasks.map(task => ({
    ...task,
    task_completed: !!task.task_completed, // Convert to boolean
  }));

  return tasksWithConvertedCompleted;
}



async function getTasks() {
  return db('tasks');
}

module.exports = {
  addTask,
  getTasksWithProjectInfo,
  getTasks
};
