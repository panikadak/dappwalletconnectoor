#!/usr/bin/env node

// Importing necessary libraries and modules
import { Command, Option } from "commander";
import fse from "fs-extra";
import { red, green, yellow } from "picocolors";
import prompts from "prompts";
import path from "node:path";
import APP_CONSTANTS from "./constants/app";
import {
    DEFAULT as DEFAULT_CONSTANTS,
    FOLDER as FOLDER_CONSTANTS,
    INSTALL as INSTALL_CONSTANTS,
    LIBRARY as LIBRARY_CONSTANTS,
    PACKAGE_MANAGER as PACKAGE_MANAGER_CONSTANTS,
    PROJECTID as PROJECTID_CONSTANTS,
    TEMPLATE as TEMPLATE_CONSTANTS,
} from "./constants/cli";
import { DIR_VALIDATION_ERROR } from "./constants/steps";
import { getAllValues, setValue } from "./contexts";
import getEnvPrefix from "./functions/getEnvPrefix";
import handleProjectCreation from "./functions/handleProjectCreation";
import introduction from "./functions/introduction";
import { wcText } from "./functions/wcText";

// Refactoring for better error handling and user prompts
const handleDirExistsError = (providedPath: string) => {
    const projectPath = providedPath.trim().replace(/[\W_]+/g, "-");

    if (fse.existsSync(path.resolve(projectPath))) {
        const error = DIR_VALIDATION_ERROR.slice(2).charAt(0).toUpperCase() + DIR_VALIDATION_ERROR.slice(2).slice(1);
        throw new Error(`${red("✖")} ${error.replace("name ", "").replace("with this", `with the name ${projectPath}`)}`);
    }
};

const argParse = () => {
    const program = new Command();

    program
        .name(APP_CONSTANTS.name)
        .description(APP_CONSTANTS.description)
        .version(APP_CONSTANTS.version)
        .addOption(new Option(`${INSTALL_CONSTANTS.alias}, ${INSTALL_CONSTANTS.cmd}`, INSTALL_CONSTANTS.description))
        .addOption(new Option(`${PROJECTID_CONSTANTS.alias}, ${PROJECTID_CONSTANTS.cmd} <${PROJECTID_CONSTANTS.name}>`, PROJECTID_CONSTANTS.description))
        .addOption(new Option(`${TEMPLATE_CONSTANTS.alias}, ${TEMPLATE_CONSTANTS.cmd} <${TEMPLATE_CONSTANTS.name}>`, TEMPLATE_CONSTANTS.description).choices(["nextjs", "react", "vite"]))
        .addOption(new Option(`${LIBRARY_CONSTANTS.alias}, ${LIBRARY_CONSTANTS.cmd} <${LIBRARY_CONSTANTS.name}>`, LIBRARY_CONSTANTS.description).choices(["wagmi", "ethers"]))
        .addOption(new Option(`${PACKAGE_MANAGER_CONSTANTS.alias}, ${PACKAGE_MANAGER_CONSTANTS.cmd} <${PACKAGE_MANAGER_CONSTANTS.name}>`, PACKAGE_MANAGER_CONSTANTS.description).choices(["yarn", "npm", "pnpm"]))
        .addOption(new Option(`${DEFAULT_CONSTANTS.alias}, ${DEFAULT_CONSTANTS.cmd}`, DEFAULT_CONSTANTS.description));

    program.parse();

    if (program.args.length !== 0) {
        handleDirExistsError(program.args[0]);
    }

    // Setting values based on user input or defaults
    setValue("template", program.opts().template);
    setValue("envPrefix", getEnvPrefix(program.opts().template));
    setValue("installDependencies", program.opts().install);
    setValue("folder", program.args[0] || null);
    setValue("library", program.opts().library);
    setValue("packageManager", program.opts().packageManager);
    setValue("projectID", program.opts().projectId);

    // Use default values if flagged
    if (program.opts().useDefault) {
        console.log(wcText("🧱 Using default configuration..."));
        DEFAULT_CONSTANTS.options?.forEach(item => setValue(item.title, item.value));
    }
};

const cliPrompt = async () => {
    // Additional refactoring for async operations and user prompts
};

// Enhanced introduction for better UX
const enhancedIntroduction = () => {
    introduction(); // Original introduction function
    console.log(green("This is an enhanced UX feature!"));
};

// Main execution flow
if (require.main === module) {
    try {
        argParse();
        enhancedIntroduction();
        cliPrompt();
    } catch (error) {
        console.error(red("Error:"), error.message);
        process.exit(1);
    }
}
