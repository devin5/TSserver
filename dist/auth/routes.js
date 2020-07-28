"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = __importDefault(require("express"));
var handlers_1 = require("./handlers");
var validators_1 = require("./validators");
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/register", validators_1.validateRegsiterRequestBody, validators_1.validateEmail, validators_1.validateUsername, handlers_1.register);
exports.authRouter.get("/", handlers_1.findAllUsers);
exports.authRouter.delete("/clearcollection", handlers_1.clearCollection);
