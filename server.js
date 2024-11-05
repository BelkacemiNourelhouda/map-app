const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Ensure express can parse JSON bodies

app.use('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate username and password
  if (username === 'nour' && password === '123') {
    res.send({ token: 'test123' });
  } else {
    res.status(401).send({ error: 'Invalid credentials' });
  }
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
