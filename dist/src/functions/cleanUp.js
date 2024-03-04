"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const picocolors_1 = require("picocolors");
const node_path_1 = __importDefault(require("node:path"));
const log_1 = require("./log");
const steps_1 = require("../constants/steps");
const cleanUp = (folder) => {
    // Delete the temporary folder
    fs_extra_1.default.rmSync(node_path_1.default.join(folder), {
        recursive: true,
        force: true,
    });
    (0, log_1.log)((0, picocolors_1.yellow)(steps_1.POST_CLEANUP_TEXT));
};
exports.default = cleanUp;
//# sourceMappingURL=cleanUp.js.map