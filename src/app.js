import "@babel/polyfill";
import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use('/api',apiRouter);


app.listen(port, () =>{
  console.info(`listening to port ${port}`);
});


export  default  app;