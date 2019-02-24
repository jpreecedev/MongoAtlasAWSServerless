/* eslint-disable no-param-reassign */
const { connector, connection, User } = require('../libs/mongo-atlas')
const { success, failure } = require('../libs/response')

/**
 * Create a user.
 */

async function main({ body }, context) {
  const { username, firstName, lastName } = JSON.parse(body)
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const user = await connector.then(() => {
      return new User({
        username,
        firstName,
        lastName,
        created: Date.now()
      }).save()
    })

    return success(user)
  } catch (e) {
    return failure({ status: false, ...e })
  } finally {
    await connection.close()
  }
}

exports.main = main
