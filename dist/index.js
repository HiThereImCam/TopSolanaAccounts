"use strict";
// import express from "express";
// import dotenv from "dotenv";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app = express();
// // const app: Express = express();
// const port = process.env.PORT;
// app.listen(port || 5000, () => {
//   console.log(`Server is up and running on ${port}`);
// });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const solanaWeb3 = __importStar(require("@solana/web3.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/solana/accounts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("solanaWeb3: ", solanaWeb3);
    let establishConnection = solanaWeb3.Connection;
    // let newSolanaConnection = new establishConnection("http://localhost:8899");
    let newSolanaConnection = new establishConnection("https://api.devnet.solana.com");
    // console.log(
    //   "newSolanaConnection: ",
    //   newSolanaConnection.rpcEndpoint
    // );
    console.log("newSolanaConnection: ", newSolanaConnection);
    try {
        let test = yield newSolanaConnection.getLargestAccounts();
        console.log("test: ", test);
    }
    catch (e) {
        console.log("Error: ", e);
    }
    // let accountsJSON = await newSolanaConnection.getLargestAccounts();
    // console.log("accounts json: ", accountsJSON);
    // console.log("clusterApiURL: ", solanaWeb3.clusterApiUrl());
    // let getAccountsJSON = await fetch("http://localhost:8899", {
    //   body: `\n {"jsonrpc":"2.0", "id":1, "method":"getLargestAccounts"}\n`,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    // });
    // let url = "http://localhost:8899";
    // let config = {
    //   body: `\n {"jsonrpc":"2.0", "id":1, "method":"getLargestAccounts"}\n`,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    // };
    // try {
    //   let getAccountsJSON = await fetch(url, config);
    //   console.log("accounts json: ", getAccountsJSON);
    // } catch (e) {
    //   console.log("error: ", e);
    // }
    // let getAccounts = getAccountsJSON.json();
    // console.log("accounts: ", getAccounts);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
