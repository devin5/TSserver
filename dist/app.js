"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var configApi_1 = __importDefault(require("./middleware/configApi"));
var routes_1 = require("./auth/routes");
exports.app = express_1.default();
configApi_1.default(exports.app);
exports.app.use("/api/auth", routes_1.authRouter);
exports.app.use("/", function (req, res) {
    res.status(200).json({ message: "fsafsfsda" });
});
