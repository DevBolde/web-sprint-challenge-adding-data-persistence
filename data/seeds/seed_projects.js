
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('database').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('database').insert([
        { project_name: 'Project 1', project_completed: true },
        { project_name: 'Project 2', project_completed: false },
        // Add more seed data here
      ]);
    });
};


