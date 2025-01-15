import express from 'express';
const app = express();

app.get('/add/:a/:b', (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  const ans = parseInt(a) + parseInt(b);
  res.send(`The sum of ${a} and ${b} is ${ans}`);
});

app.get('/subtract/:a/:b', (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  const ans = parseInt(a) - parseInt(b);
  res.send(`The subtraction of ${a} and ${b} is ${ans}`);
});
app.get('/multiply/:a/:b', (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  const ans = parseInt(a) * parseInt(b);
  res.send(`The mul of ${a} and ${b} is ${ans}`);
});

app.get('/devide/:a/:b', (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  const ans = parseInt(a) / parseInt(b);
  res.send(`The devide of ${a} and ${b} is ${ans}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});