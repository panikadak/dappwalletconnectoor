"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifyPackageManager = void 0;
const node_path_1 = __importDefault(require("node:path"));
const process_1 = __importDefault(require("process"));
const identifyPackageManager = () => {
    const execPath = process_1.default.env.npm_execpath;
    const pathSep = node_path_1.default.sep;
    const params = execPath.split(pathSep).pop();
    const packageManager = params.replace(/(-cli)?\.(c)?js/, "");
    return packageManager;
};
exports.identifyPackageManager = identifyPackageManager;
//# sourceMappingURL=indentifyPackageManager.js.map