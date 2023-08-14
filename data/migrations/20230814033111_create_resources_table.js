exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
      tbl.increments('resource_id'); // primary key column
      tbl.string('resource_name').notNullable().unique(); // required and unique column
      tbl.text('resource_description'); // optional column
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
  };
  
