"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var usersModel_1 = __importDefault(require("./models/usersModel"));
var url;
typeof process.env.DATABASE_URL === "string"
    ? (url = process.env.DATABASE_URL)
    : console.error("no db url in ENV");
var connectDb = function () {
    return mongoose_1.default.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
exports.connectDb = connectDb;
var models = { Users: usersModel_1.default };
exports.default = models;
