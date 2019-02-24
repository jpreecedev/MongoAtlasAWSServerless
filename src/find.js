/* eslint-disable no-param-reassign */

const { connector, User } = require('../libs/mongo-atlas')
const { success, failure } = require('../libs/response')

/**
 * Find a user by username
 */

async function handler({ queryStringParameters }) {
  const { username } = queryStringParameters

  try {
    const user = await connector.then(() => {
      return User.findOne({ username })
    })
    return success(user)
  } catch (e) {
    return failure({ status: false, ...e })
  }
}

exports.handler = handler
