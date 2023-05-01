const { AuthenticationError } = require('apollo-server-express');
const { User, Fighters, Matchup, Betslip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate({
        path: 'betslips',
        populate: {
          path:'matchup',
          populate: {
            path: 'fighters'
          }
        }
      })
    },
    betslips: async () => {
      return Betslip.find().populate('matchups')
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate({
        path: 'betslips',
        populate: 'matchup'
      },
      {
        path: 'betslips.matchup',
        populate: 'fighters'
      })
    },
    fighters: async () => {
      return await Fighters.find();
    },
    matchups: async () => {

      return await Matchup.find().populate('fighters');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('betslips');
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    betslip: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('betslips');

        return user.betslips.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    placeBet: async (parent, args, context) => {
      if (context.user) {
        const bet = new Betslip(args);

        await User.findByIdAndUpdate(context.user._id, { $push: { betslips: bet } });
        await User.findByIdAndUpdate(context.user._id, { $inc:  { accountBalance: -100 }} );
        return bet;
      }
      throw new AuthenticationError('Not logged in');
    },





    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
