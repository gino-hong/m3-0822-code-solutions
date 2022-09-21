const express = require('express');
const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public');

const server = express.static(absolutePath);

app.use(server);

app.listen(3000, () => {
  console.log('Express server listening on port 3000.');
});
