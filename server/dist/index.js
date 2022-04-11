"use strict";
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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const getLargestSolanaAccounts_1 = __importDefault(require("../util/getLargestSolanaAccounts"));
const convertSolToUSD_1 = require("../util/convertSolToUSD");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.get("/solana/accounts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let largestAccounts = null;
    try {
        largestAccounts = yield (0, getLargestSolanaAccounts_1.default)();
    }
    catch (e) {
        console.error("error: ", e);
        res.send(e);
    }
    res.send(JSON.stringify(largestAccounts));
}));
app.get("/solana/convert-to-usd", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let solanaPrice = null;
    try {
        solanaPrice = yield (0, convertSolToUSD_1.convertSolToUSD)();
    }
    catch (e) {
        console.error("error: ", e);
        res.send(e);
    }
    res.send(JSON.stringify(solanaPrice));
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
