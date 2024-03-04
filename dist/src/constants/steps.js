"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIR_VALIDATION_ERROR = exports.DELETING_TEXT = exports.POST_CLEANUP_TEXT = exports.STEPS_TEXT = exports.READY_TEXT = exports.PROGRESS_FORMAT = exports.CREATING_TEXT = exports.WELCOME_TEXT = exports.STEPS = exports.MAP_PACKAGE_MANAGER_LOCK = exports.STEPS_FOR_PACKAGE_MANAGER = void 0;
const picocolors_1 = require("picocolors");
const app_1 = __importDefault(require("./app"));
const contexts_1 = require("../contexts");
const wcText_1 = require("../functions/wcText");
const STEPS_BUILDER = (projectPath, packageManagerSteps) => {
    const installDependencies = (0, contexts_1.getValue)("installDependencies");
    return `
	${(0, picocolors_1.bold)((0, picocolors_1.green)("cd ") + (0, picocolors_1.magenta)(projectPath))}${installDependencies ? `` : `\n\t${(0, picocolors_1.bold)((0, picocolors_1.green)(packageManagerSteps[0]))}`}
	${(0, picocolors_1.bold)((0, picocolors_1.green)(packageManagerSteps[1]))}
	`;
};
exports.STEPS_FOR_PACKAGE_MANAGER = {
    yarn: ["yarn", "yarn dev"],
    npm: ["npm install", "npm run dev"],
    pnpm: ["pnpm install", "pnpm run dev"],
};
exports.MAP_PACKAGE_MANAGER_LOCK = {
    yarn: "yarn.lock",
    npm: "package-lock.json",
    pnpm: "pnpm-lock.yaml",
};
const STEPS = (projectPath, packageManager = "yarn") => {
    switch (packageManager) {
        case "yarn":
            return STEPS_BUILDER(projectPath, exports.STEPS_FOR_PACKAGE_MANAGER.yarn);
        case "npm":
            return STEPS_BUILDER(projectPath, exports.STEPS_FOR_PACKAGE_MANAGER.npm);
        case "npx":
            return STEPS_BUILDER(projectPath, exports.STEPS_FOR_PACKAGE_MANAGER.npm);
        case "pnpm":
            return STEPS_BUILDER(projectPath, exports.STEPS_FOR_PACKAGE_MANAGER.pnpm);
        default:
            return STEPS_BUILDER(projectPath, exports.STEPS_FOR_PACKAGE_MANAGER.yarn);
    }
};
exports.STEPS = STEPS;
exports.WELCOME_TEXT = `📲 Welcome to ${(0, wcText_1.wcText)(`${app_1.default.name}`)} wizard`;
exports.CREATING_TEXT = "🚀 Creating your WalletConnect Project";
exports.PROGRESS_FORMAT = `🛠️  Setting up ${(0, picocolors_1.blue)("{bar}")} {percentage}% • ETA: {eta_formatted}`;
exports.READY_TEXT = "🎉 Your WalletConnect Project is ready";
exports.STEPS_TEXT = "👉 To get started, follow these steps:";
exports.POST_CLEANUP_TEXT = "✅ Project cleaned up successfully!";
exports.DELETING_TEXT = "🗑️  Deleting temporary files. This may take a few seconds...";
exports.DIR_VALIDATION_ERROR = `A directory with this name already exists, please use a different name`;
//# sourceMappingURL=steps.js.map