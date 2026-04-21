const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { code } = event.queryStringParameters;

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `<script>
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify(data)}',
        '*'
      );
    </script>`,
  };
};