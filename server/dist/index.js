"use strict";
// import express from "express";
// import dotenv from "dotenv";
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
const cors_1 = __importDefault(require("cors"));
const getLargestSolanaAccounts_1 = __importDefault(require("../util/getLargestSolanaAccounts"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.get("/solana/accounts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello");
    let largestAccounts = yield (0, getLargestSolanaAccounts_1.default)();
    res.send(JSON.stringify(largestAccounts));
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https//localhost:${port}`);
});
