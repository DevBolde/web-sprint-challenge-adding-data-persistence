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
  return knex('projects').insert(project);
}
