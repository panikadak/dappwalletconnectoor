#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing necessary libraries and modules
const commander_1 = require("commander");
const fs_extra_1 = __importDefault(require("fs-extra"));
const picocolors_1 = require("picocolors");
const node_path_1 = __importDefault(require("node:path"));
const app_1 = __importDefault(require("./constants/app"));
const cli_1 = require("./constants/cli");
const steps_1 = require("./constants/steps");
const contexts_1 = require("./contexts");
const getEnvPrefix_1 = __importDefault(require("./functions/getEnvPrefix"));
const introduction_1 = __importDefault(require("./functions/introduction"));
const wcText_1 = require("./functions/wcText");
// Refactoring for better error handling and user prompts
const handleDirExistsError = (providedPath) => {
    const projectPath = providedPath.trim().replace(/[\W_]+/g, "-");
    if (fs_extra_1.default.existsSync(node_path_1.default.resolve(projectPath))) {
        const error = steps_1.DIR_VALIDATION_ERROR.slice(2).charAt(0).toUpperCase() + steps_1.DIR_VALIDATION_ERROR.slice(2).slice(1);
        throw new Error(`${(0, picocolors_1.red)("✖")} ${error.replace("name ", "").replace("with this", `with the name ${projectPath}`)}`);
    }
};
const argParse = () => {
    const program = new commander_1.Command();
    program
        .name(app_1.default.name)
        .description(app_1.default.description)
        .version(app_1.default.version)
        .addOption(new commander_1.Option(`${cli_1.INSTALL.alias}, ${cli_1.INSTALL.cmd}`, cli_1.INSTALL.description))
        .addOption(new commander_1.Option(`${cli_1.PROJECTID.alias}, ${cli_1.PROJECTID.cmd} <${cli_1.PROJECTID.name}>`, cli_1.PROJECTID.description))
        .addOption(new commander_1.Option(`${cli_1.TEMPLATE.alias}, ${cli_1.TEMPLATE.cmd} <${cli_1.TEMPLATE.name}>`, cli_1.TEMPLATE.description).choices(["nextjs", "react", "vite"]))
        .addOption(new commander_1.Option(`${cli_1.LIBRARY.alias}, ${cli_1.LIBRARY.cmd} <${cli_1.LIBRARY.name}>`, cli_1.LIBRARY.description).choices(["wagmi", "ethers"]))
        .addOption(new commander_1.Option(`${cli_1.PACKAGE_MANAGER.alias}, ${cli_1.PACKAGE_MANAGER.cmd} <${cli_1.PACKAGE_MANAGER.name}>`, cli_1.PACKAGE_MANAGER.description).choices(["yarn", "npm", "pnpm"]))
        .addOption(new commander_1.Option(`${cli_1.DEFAULT.alias}, ${cli_1.DEFAULT.cmd}`, cli_1.DEFAULT.description));
    program.parse();
    if (program.args.length !== 0) {
        handleDirExistsError(program.args[0]);
    }
    // Setting values based on user input or defaults
    (0, contexts_1.setValue)("template", program.opts().template);
    (0, contexts_1.setValue)("envPrefix", (0, getEnvPrefix_1.default)(program.opts().template));
    (0, contexts_1.setValue)("installDependencies", program.opts().install);
    (0, contexts_1.setValue)("folder", program.args[0] || null);
    (0, contexts_1.setValue)("library", program.opts().library);
    (0, contexts_1.setValue)("packageManager", program.opts().packageManager);
    (0, contexts_1.setValue)("projectID", program.opts().projectId);
    // Use default values if flagged
    if (program.opts().useDefault) {
        console.log((0, wcText_1.wcText)("🧱 Using default configuration..."));
        cli_1.DEFAULT.options?.forEach(item => (0, contexts_1.setValue)(item.title, item.value));
    }
};
const cliPrompt = async () => {
    // Additional refactoring for async operations and user prompts
};
// Enhanced introduction for better UX
const enhancedIntroduction = () => {
    (0, introduction_1.default)(); // Original introduction function
    console.log((0, picocolors_1.green)("This is an enhanced UX feature!"));
};
// Main execution flow
if (require.main === module) {
    try {
        argParse();
        enhancedIntroduction();
        cliPrompt();
    }
    catch (error) {
        console.error((0, picocolors_1.red)("Error:"), error.message);
        process.exit(1);
    }
}
//# sourceMappingURL=index.js.map