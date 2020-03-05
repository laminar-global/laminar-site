const fetch = require('node-fetch').default;

const token = process.env.COPPER || '';

exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body);
    const { name, email, message = '' } = body;

    if (name && email) {
      const payload = {
        tags: ['site'],
        name,
        email: {
          email
        },
        details: message
      };

      fetch('https://api.prosperworks.com/developer_api/v1/leads', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'X-PW-AccessToken': token,
          'X-PW-Application': 'developer_api',
          'X-PW-UserEmail': 'shanyang@laminar.team'
        },
        body: JSON.stringify(payload)
      });
    }
  }

  callback(null, {
    statusCode: 200,
    body: 'magic.'
  });
};
