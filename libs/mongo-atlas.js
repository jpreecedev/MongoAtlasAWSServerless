const mongoose = require('mongoose')
const userSchema = require('../schemas/user')

const connector = mongoose.connect(process.env.connectionString)
const User = mongoose.model('user', userSchema, 'user')

module.exports = {
  connector,
  connection: mongoose.connection,
  User
}
