const knex = require('../../data/dbConfig'); // Configure the database connection in db-config.js

module.exports = {
  getProjects,
  addProject,
  // Add other functions for interacting with the 'projects' table as needed
};

async function getProjects() {
  return knex('projects');
}

async function addProject(project) {
  // Convert project_completed to a boolean before insertion
  project.project_completed = Boolean(project.project_completed);

  return knex('projects')
    .insert(project)
    .then(([project_id]) => {
      return knex('projects').where('project_id', project_id).first();
    });
}


