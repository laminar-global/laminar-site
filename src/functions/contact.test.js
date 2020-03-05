const { handler } = require('./contact');

handler(
  {
    httpMethod: 'POST',
    body: JSON.stringify({
      name: 'Test Function',
      email: 'test@unicorn.land'
    })
  },
  null,
  console.log.bind(console)
);
