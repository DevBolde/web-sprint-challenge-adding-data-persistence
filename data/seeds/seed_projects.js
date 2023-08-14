// data/seeds/seed_projects.js
const projectsData = [
  {
    project_name: 'Project A',
    project_description: 'This is Project A description.',
    project_completed: false,
  },
  {
    project_name: 'Project B',
    project_description: 'This is Project B description.',
    project_completed: true,
  },
  // Add more projects as needed
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('cars').insert(projectsData)
};

