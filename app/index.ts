import express from 'express';
import { testing } from '@app/test';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(testing('GGG'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})