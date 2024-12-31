const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'), (err) => {
    if (err) {
      // Handle the error appropriately, e.g., send a 404 response
      console.error(err);
      res.status(404).send('<h1>404 Not Found</h1>');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
