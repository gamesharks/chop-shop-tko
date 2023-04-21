const db = require('./connection');
const { User, Category, Matchup, Fighters } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  console.log('categories seeded');

  await Fighters.deleteMany();

  const fighters = await Fighters.insertMany([
    {
      name: 'Curtis Blaydes',
      quickStats:
        'W/L=17-3, D=0,',
      image: 'c-blaydes.png',
      wins: 17,
      losses: 3,
      sigStrikes: 4

    },
    {
      name: 'Sergei Pavlovich',
      quickStats:
        'W/L=17-3, D=0,',
      image: 's-pavlovic.jpg',
      wins: 17,
      losses: 1,
      sigStrikes: 7

    },
  ]);

  console.log('fighters seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');


  await Matchup.deleteMany();

  await Matchup.create({
    fightName: 'UFC 288', 
    fighters: [
      "Curtis Blaydes", "Sergei Pavlovich"
    ],
    isActive: true
  });


  process.exit();
});
