import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("fullname", 255).notNullable();
    table.string("username", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("role", 255).notNullable();
    table.string("password", 255).notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("users");
}
