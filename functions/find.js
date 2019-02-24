/* eslint-disable no-param-reassign */

const { connector, User } = require('../libs/mongo-atlas')
const { success, failure } = require('../libs/response')

/**
 * Find a user by username
 */

async function main({ queryStringParameters }, context) {
  const { username } = queryStringParameters
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const user = await connector.then(() => {
      return User.findOne({ username })
    })
    return success(user)
  } catch (e) {
    return failure({ status: false, ...e })
  }
}

exports.main = main
