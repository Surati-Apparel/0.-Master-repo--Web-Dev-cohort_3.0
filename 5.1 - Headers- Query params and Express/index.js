import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

app.listen(4001, () => {
  console.log('Server is running on port 3000');
  console.log('Hit any endpoint');
});