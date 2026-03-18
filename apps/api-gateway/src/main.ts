import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import proxy from 'express-http-proxy';
import cookieParser from 'cookie-parser';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();

app.use(cors(
  {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }
));

app.use(morgan('dev'));

app.use(cookieParser());

app.set('trust proxy', 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: (req:any) => (req.user ? 1000 : 100),
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: any) => req.user?.id || req.ip,
}));

app.get('/gateway-health', (req, res) => {
  res.send({ message: 'Gateway is healthy' });
});


app.use('/', proxy('http://localhost:6001'));

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
