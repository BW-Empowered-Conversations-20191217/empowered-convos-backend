exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'bitchcraft', password: '123ABc', firstName: 'Sabrina', lastName: 'Spellman', email: 'sspellman@gmail.com', phone: 8155551234},
        {username: 'JugHead', password: 'ABC123', firstName: 'Jughead', lastName: 'Jones', email: 'jason@thenos.net', phone: 8475551234},
        {username: 'Archie22', password: 'Boo', firstName: 'Archie', lastName: 'Andrews', email: 'aandrews@gmail.com', phone: 6305551234},
        {username: 'NotBetty', password: '123ABC', firstName: 'Veronica', lastName: 'Lodge', email: 'vlodge@gmail.com', phone: 7085551234},
        {username: 'BettyC', password: 'abd123', firstName: 'Betty', lastName: 'Cooper', email: 'bcooper@gmail.com', phone: 2245551234}
      ]);
    });
};
