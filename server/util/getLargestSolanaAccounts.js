"use strict";
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
const solanaWeb3 = __importStar(require("@solana/web3.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let solanaClusterRPCEndpoint = process.env
    .SOLANA_CLUSTER_RPC_ENDPOINT;
/**
 *
 * @returns array of solana accounts and lamport values
 *
 * this value needs to be cached to prevent being rate-limited
 */
const getLargestSolanaAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    let establishConnection = solanaWeb3.Connection;
    let newSolanaConnection = new establishConnection(solanaClusterRPCEndpoint);
    let largestSolanaAccountsObj = null;
    try {
        largestSolanaAccountsObj = yield newSolanaConnection.getLargestAccounts();
    }
    catch (e) {
        throw new Error(e);
    }
    if (largestSolanaAccountsObj) {
        return largestSolanaAccountsObj.value;
    }
});
exports.default = getLargestSolanaAccounts;
