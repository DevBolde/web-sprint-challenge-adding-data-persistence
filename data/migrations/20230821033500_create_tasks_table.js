exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
      tbl.increments('task_id'); // primary key column
      tbl.string('task_description').notNullable(); // required column
      tbl.text('task_notes'); // optional column
      tbl.boolean('task_completed').defaultTo(false); // defaults to false (0) if not provided
      tbl
        .integer('project_id') // foreign key column
        .notNullable()
        .references('project_id') // references the primary key of the projects table
        .inTable('projects')
        .onDelete('CASCADE') // cascading delete if a project is deleted
        .onUpdate('CASCADE'); // cascading update if a project_id is updated
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
  };
  
