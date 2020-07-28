"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
function serverConfig(app) {
    app.use(express_1.default.json());
    app.use(helmet_1.default());
    app.use(cors_1.default());
    app.use(morgan_1.default(":method :url :status :res[content-length] - :response-time ms"));
    return null;
}
exports.default = serverConfig;
