"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(user) {
    var secret;
    if (process.env.MY_SECRET) {
        secret = process.env.MY_SECRET;
        var payload = {
            User_Email: user.email,
            User_ID: user._id,
        };
        var options = {
            expiresIn: "360d",
        };
        return jsonwebtoken_1.default.sign(payload, secret, options);
    }
    else {
        console.log("no secret in env");
    }
}
exports.default = generateToken;
