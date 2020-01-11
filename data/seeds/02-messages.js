exports.seed = function(knex) {
  return knex('messages').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {message: 'Jughead, come quick', recipientFirstName: 'Jughead', recipientLastName: 'Jones', phone: 8475551234},
        {message: 'Archie is missing', recipientFirstName: 'Veronica', recipientLastName: 'Lodge', phone: 6305551234},
        {message: 'Need a hex?', recipientFirstName: 'Sabrina', recipientLastName: 'Spellman', phone: 8155551234},
        {message: 'I am done with this conversation', recipientFirstName: 'Betty ', recipientLastName: 'Cooper', phone: 8475551234},
        {message: 'Found Archie, he was sleeping', recipientFirstName: 'Jughead', recipientLastName: 'Jones', phone: 8475551234}
        
      ]);
    });
};