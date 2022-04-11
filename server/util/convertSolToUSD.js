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
exports.convertSolToUSD = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
const CMC_KEY = process.env.COINMARKETCAP_API_KEY;
const convertSolToUSD = () => __awaiter(void 0, void 0, void 0, function* () {
    let solanaPriceRes = yield (0, node_fetch_1.default)("https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=1&id=5426", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Cmc_pro_api_key": `${CMC_KEY}`,
        },
    });
    let solanaPrice = yield solanaPriceRes.json();
    return solanaPrice.data.quote.USD;
});
exports.convertSolToUSD = convertSolToUSD;
