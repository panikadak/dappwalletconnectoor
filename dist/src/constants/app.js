"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = __importDefault(require("../../package.json"));
const APP_CONSTANTS = {
    name: package_json_1.default.name, // "dappwalletconnectoor"
    description: package_json_1.default.description,
    version: package_json_1.default.version, // "0.7.1"
    baseURL: package_json_1.default.repository.url.replace(/^git\+/, '').replace(/\.git$/, ''), // Converts the git URL to a clean HTTPS URL
};
exports.default = APP_CONSTANTS;
//# sourceMappingURL=app.js.map