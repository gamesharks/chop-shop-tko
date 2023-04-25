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
      sigStrikes: 4,
      nickName: 'Razor'

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
    {
      name: 'Aljamain Sterling',
      quickStats:
        'W/L=22-3, D=0,',
      image: 'Aljo.jpg',
      wins: 22,
      losses: 3,
      sigStrikes: 20,
      nickName: 'Funk Master',
      odds: -105

    },
    {
      name: 'Henry Cejudo',
      quickStats:
        'W/L=16-2, D=0,',
      image: 'henryC.jpg',
      wins: 16,
      losses: 2,
      sigStrikes: 7,
      nickName: 'Triple C',
      odds: -115

    },
    {
      name: 'Belal Muhammad',
      quickStats:
        'W/L=22-3, D=0,',
      image: 'bMuhammad.jpg',
      wins: 22,
      losses: 3,
      sigStrikes: 7,
      nickName: 'Remember the Name',
      odds: +125

    },
    {
      name: 'Gilbert Burns',
      quickStats:
        'W/L=22-5, D=0,',
      image: 'gBurns.jpg',
      wins: 22,
      losses: 5,
      sigStrikes: 7,
      nickName: 'Durinho',
      odds: -145

    },
    {
      name: 'Jessica Andrade',
      quickStats:
        'W/L=17-3, D=0,',
      image: 'jAndrade.jpg',
      wins: 17,
      losses: 1,
      sigStrikes: 7,
      odds: -185

    },
    {
      name: 'Yan Xiaonan',
      quickStats:
        'W/L=16-3, D=0,',
      image: 'yXiaonan.jpg',
      wins: 16,
      losses: 3,
      sigStrikes: 7,
      odds: +160

    }
  ]);

  console.log('fighters seeded');

  await User.deleteMany();

  const user1 = await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    friends: [user1._id]
  });

  console.log('users seeded');


  await Matchup.deleteMany();

  await Matchup.insertMany([{
    fightDate: new Date('2023-04-22'),
    fightName: 'UFC Fight Night: Pavlovich vs. Blaydes', 
    fighters: [
      fighters[0], fighters[1]
    ],
    isActive: false,
    odds: [fighters[0].odds,fighters[1].odds]
  },
  {
    fightDate: new Date('2023-05-06'),
    fightName: 'UFC 288', 
    fighters: [
       fighters[2],fighters[3]
    ],
    isActive: true,
    odds: [fighters[2].odds,fighters[3].odds]
  },
  {
    fightDate: new Date('2023-05-06'),
    fightName: 'UFC 288', 
    fighters: [
       fighters[4],fighters[5]
    ],
    isActive: true,
    odds: [fighters[4].odds,fighters[5].odds]
  },
  {
    fightDate: new Date('2023-05-06'),
    fightName: 'UFC 288', 
    fighters: [
       fighters[6],fighters[7]
    ],
    isActive: true,
    odds: [fighters[6].odds,fighters[7].odds]
  }
]);


  process.exit();
});
