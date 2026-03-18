import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors(
  {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }
));

const port = process.env.PORT ? Number(process.env.PORT) : 6001;
const server = app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send({ message: 'Auth Service is healthy' });
});

server.on('error', (error) => {
  console.error(error);
});
