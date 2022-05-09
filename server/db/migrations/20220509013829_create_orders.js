/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
    await knex.schema.createTable("orders", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("drink").notNullable();
      table.string("size").notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  
  exports.down = async function (knex) {
    await knex.schema.dropTable("orders");
  };
  