import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import getLargestSolanaAccounts from "../util/getLargestSolanaAccounts";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get("/solana/accounts", async (req: Request, res: Response) => {
  let largestAccounts = await getLargestSolanaAccounts();
  res.send(JSON.stringify(largestAccounts));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https//localhost:${port}`);
});
