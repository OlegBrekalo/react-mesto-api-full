const mongoose = require('mongoose');
const { regexURL } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return regexURL.test(v);
      },
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
