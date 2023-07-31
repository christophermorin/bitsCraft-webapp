import express, { NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { buildGameContext } from './createGame/buildGameContext';

export function app(){
  dotenv.config();

  const app = express()
  // app.locals
 app.use(cors())

  const context = buildGameContext()

  app.get('/', (req, res) => {
    res.send((context));
  });

  return app;
}

