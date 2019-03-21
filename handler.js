const fetch = require('node-fetch')

module.exports.hello = async (event, context) => {
  const postUrl = 'https://<your endpoint for your server that gets all messages, processes them, and fires off the emails>.com'
  try {
    const result = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...message })
    })
    console.info(result)
  } catch (err) {
    console.error(err)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  }
};
