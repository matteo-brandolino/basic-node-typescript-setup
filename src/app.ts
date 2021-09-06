import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();

app.use(cors())

const port = 5000

app.get("/", (req: Request, res: Response) => {
  res.send('It Works!')
});
app.listen(port, () : void => {console.log(`Server listing at ${port}`)});
