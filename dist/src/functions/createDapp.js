"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_progress_1 = __importDefault(require("cli-progress"));
const cloneAndCopy_1 = __importDefault(require("./cloneAndCopy"));
const log_1 = require("./log");
const wcText_1 = require("./wcText");
const steps_1 = require("../constants/steps");
const contexts_1 = require("../contexts");
const createDapp = async () => {
    // Create the project folder and copy the template files
    (0, log_1.log)((0, wcText_1.wcText)(`\n${steps_1.CREATING_TEXT}\n`));
    const progressBar = (0, contexts_1.setProgressBar)(new cli_progress_1.default.SingleBar({
        format: steps_1.PROGRESS_FORMAT,
    }, cli_progress_1.default.Presets.shades_classic));
    progressBar.start(100, 0);
    let value = 0;
    // Simulate the progress bar with a timer (10ms)
    const timer = setInterval(function () {
        value++;
        progressBar.update(value);
        if (value >= progressBar.getTotal()) {
            clearInterval(timer);
            (0, cloneAndCopy_1.default)();
        }
    }, 10);
};
exports.default = createDapp;
//# sourceMappingURL=createDapp.js.map