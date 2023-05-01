require('dotenv').config()
const db = require('./connection');
const { User, Category, Matchup, Fighters } = require('../models');

db.once('open', async () => {

  await Fighters.deleteMany();

  const fighters = await Fighters.insertMany([
    {
      name: 'Curtis Blaydes',
      reach: '80"',
      image: 'c-blaydes.png',
      wins: 17,
      winsByKO: 12,
      winsBySubmission: 0,
      losses: 4,
      nickName: 'Razor',
      odds: -155,
      stance: 'Orthodox',
      height: "6'4",
      weight: 262,
      age: 32


    },
    {
      name: 'Sergei Pavlovich',
      reach: '84"',
      image: 's-pavlovich.jpg',
      wins: 18,
      winsByKO: 15,
      winsBySubmission: 0,
      losses: 1,
      draws: 0,
      nickName: '',
      odds: +155,
      stance: 'Southpaw',
      height: "6'3",
      weight: 260,
      age: 30

    },
    {
      name: 'Aljamain Sterling',
      reach: '71"',
      image: 'Aljo.jpg',
      wins: 22,
      winsByKO: 3,
      winsBySubmission: 8,
      losses: 3,
      draws: 0,
      nickName: 'Funk Master',
      odds: -105,
      stance: 'Orthodox',
      height: "5'7",
      weight: 135,
      age: 33

    },
    {
      name: 'Henry Cejudo',
      reach: '64"',
      image: 'henryC.jpg',
      wins: 16,
      winsByKO: 8,
      winsBySubmission: 0,
      losses: 2,
      draws: 0,
      nickName: 'Triple C',
      odds: -115,
      stance: 'Orthodox',
      height: "5'4",
      weight: 135,
      age: 36

    },
    {
      name: 'Belal Muhammad',
      reach: '72"',
      image: 'bMuhammad.jpg',
      wins: 22,
      winsByKO: 5,
      winsBySubmission: 1,
      losses: 3,
      draws: 0,
      nickName: 'Remember the Name',
      odds: +125,
      stance: 'Orthodox',
      height: "5'11",
      weight: 170,
      age: 34

    },
    {
      name: 'Gilbert Burns',
      reach: '71"',
      image: 'gBurns.jpg',
      wins: 22,
      winsByKO: 6,
      winsBySubmission: 9,
      losses: 5,
      draws: 0,
      nickName: 'Durinho',
      odds: -145,
      stance: 'Orthodox',
      height: "5'10",
      weight: 170,
      age: 36

    },
    {
      name: 'Jessica Andrade',
      reach: '62"',
      image: 'jAndrade.jpg',
      wins: 24,
      winsByKO: 9,
      winsBySubmission: 8,
      losses: 10,
      draws: 0,
      odds: -185,
      stance: 'Orthodox',
      height: "5'1",
      weight: 124,
      age: 31

    },
    {
      name: 'Yan Xiaonan',
      reach: '63"',
      image: 'yXiaonan.jpg',
      wins: 16,
      winsByKO: 7,
      winsBySubmission: 0,
      losses: 3,
      draws: 0,
      odds: +160,
      stance: 'Orthodox',
      height: "5'5",
      weight: 115,
      age: 33

    }
  ]);

  console.log('fighters seeded');

  await User.deleteMany();

  const user1 = await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    accountBalance: 1000
  });

  const user2 = await User.create({
    firstName: 'Kevin',
    lastName: 'Hernandez',
    email: 'kevin@testmail.com',
    password: '12345',
    accountBalance: 1000
  });

  const user3 = await User.create({
    firstName: 'Adrian',
    lastName: 'Bruno',
    email: 'adrian@testmail.com',
    password: '12345',
    accountBalance: 1000
  });

  const user4 = await User.create({
    firstName: 'Craig',
    lastName: 'Reese',
    email: 'craig@testmail.com',
    password: '12345',
    betslips: [
      {
        waiverAmount: 125,
      }
    ],
    accountBalance: 1000
  });

  const user5 = await User.create({
    firstName: 'Gerardo',
    lastName: 'Ormeno',
    email: 'gerardo@testmail.com',
    password: '12345',
    accountBalance: 1000
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    friends: [user1._id],
    accountBalance: 1000
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

console.log('matchups seeded')
  process.exit();
});
