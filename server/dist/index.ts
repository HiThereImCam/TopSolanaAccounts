import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import getLargestSolanaAccounts from "../util/getLargestSolanaAccounts";
import { convertSolToUSD } from "../util/convertSolToUSD";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get("/solana/accounts", async (req: Request, res: Response) => {
  console.log("hello");
  let largestAccounts = await getLargestSolanaAccounts();

  // console.dir(largestAccounts, { depth: null });
  res.send(JSON.stringify(largestAccounts));
});

app.get("/solana/convert-to-usd", async (req: Request, res: Response) => {
  let solanaPrice = await convertSolToUSD();
  res.send(JSON.stringify(solanaPrice));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
