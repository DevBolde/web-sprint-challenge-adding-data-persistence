// build your `Resource` model here
const knex = require('../../data/dbConfig'); // Configure the database connection in db-config.js

module.exports = {
  getResource,
  addResource,
  // Add other functions for interacting with the 'projects' table as needed
};

async function getResource() {
  return knex('resources');
}

async function addResource(resource) {
  const [resource_id] = await knex('resources').insert(resource);
  return knex('resources').where({ resource_id }).first();
}
