const knex = require('knex');
const knexConfig = require('../knexfile'); // Path to your knexfile.js

// Create a Knex instance using the configuration from knexfile.js
const db = knex(knexConfig.development); // Use 'development' configuration

module.exports = db;
