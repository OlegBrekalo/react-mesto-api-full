const mongoose = require('mongoose');
const validatorLib = require('validator');
const { defaultUser, regexURL } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return validatorLib.isEmail(v);
      },
      message: (props) => `${props.value} не является валидным Email`,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    default: defaultUser.name,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    default: defaultUser.about,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    default: defaultUser.avatar,
    type: String,
    validate: {
      validator(v) {
        return regexURL.test(v);
      },
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
