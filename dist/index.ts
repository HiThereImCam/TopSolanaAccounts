// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// // const app: Express = express();
// const port = process.env.PORT;

// app.listen(port || 5000, () => {
//   console.log(`Server is up and running on ${port}`);
// });

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as solanaWeb3 from "@solana/web3.js";

import getLargestSolanaAccounts from "../util/getLargestSolanaAccounts";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/solana/accounts", async (req: Request, res: Response) => {
  let largestAccounts = await getLargestSolanaAccounts();
  res.send(largestAccounts);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
