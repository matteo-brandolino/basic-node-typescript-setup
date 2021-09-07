import express, { Request, Response } from 'express';
import cors from 'cors';

import { eventsFromBlockChain, listenToEvents } from './blockchain-connection'

const app = express();
require('dotenv').config()

listenToEvents()

app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome ${eventsFromBlockChain.signer}, your balance is ${eventsFromBlockChain.balance} eth`)
});

app.listen(process.env.PORT, () : void => {console.log(`Server listening at ${process.env.PORT}`)});



