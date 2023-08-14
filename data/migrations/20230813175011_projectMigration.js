exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments('project_id'); // primary key column with a custom name
      tbl.string('project_name').notNullable(); // required column
      tbl.text('project_description'); // optional column
      tbl.boolean('project_completed').defaultTo(false); // defaults to false (0) if not provided
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects'); // Use 'projects' instead of 'project'
  };
  
