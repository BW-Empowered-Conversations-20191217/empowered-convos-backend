
exports.seed = function(knex) {
  return knex('users_messages').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_messages').insert([
        {users_id: 4, messages_id: 1},
        {users_id: 5, messages_id: 2},
        {users_id: 5, messages_id: 3},
        {users_id: 1, messages_id: 4},
        {users_id: 4, messages_id: 5}
      ]);
    });
};
