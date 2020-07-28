"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = __importDefault(require("bcryptjs"));
function hashPass(password) {
    var hash = bcryptjs_1.default.hashSync(password, 12);
    return hash;
}
exports.default = hashPass;
