
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('userName', 255).unique().notNullable();
        tbl.string('password',255).notNullable()
        tbl.string('firstName', 255).notNullable();
        tbl.string('lastName', 255).notNullable();
        tbl.string('email', 255).notNullable();
        tbl.integer('phone', 15).notNullable()
    })

    .createTable('messages', tbl => {
        tbl.increments();
        tbl.string('message', 1000).notNullable();
        tbl.string('recipientFirstName', 255).notNullable();
        tbl.string('recipientLastName', 255).notNullable();
        tbl.integer('phone', 15).notNullable();
    })

    .createTable('users_messages', tbl => {
        tbl.integer('users_id').unsigned().notNullable().references('id').inTable('users')
        tbl.integer('messages_id').unsigned().notNullable().references('id').inTable('messages')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users_messages')
    .dropTableIfExists('messages')
    .dropTableIfExists('users')
};
