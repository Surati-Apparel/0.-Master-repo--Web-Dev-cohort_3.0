const express = require('express');
const app = express();


function checkerMiddleware(req, res, next) {
  if (req.query.age >= 15) {
    next();
  } else {
    res.status(401).json({
        message: 'You are not allowed to ride the ride1',
        age: req.query.age
    });
  }
}

app.use(checkerMiddleware);

app.get('/ride1', (req, res) => {
  const age = req.query.age;
  res.send(`you are riding a ride1 ar age: ${age}`);
});

app.get('/ride2', (req, res) => {
    const age = req.query.age;
    res.send(`you are riding a ride2 ar age: ${age}`);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Hit any endpoint with query param age to check the middleware');
});
