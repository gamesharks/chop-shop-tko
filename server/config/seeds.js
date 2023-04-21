const db = require('./connection');
const { User, Category, Stats } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Fighters' },
  ]);

  console.log('categories seeded');

  await Stats.deleteMany();

  const stats = await Stats.insertMany([
    {
      name: 'Curtis Blaydes',
      quickStats:
        'W/L=17-3, D=0,',
      image: 'c-blaydes.png',
      category: categories[0]._id,
      wins: 17,
      losses: 3,
      sigStrikes: 4

    }
  ]);

  console.log('stats seeded');

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

  process.exit();
});
