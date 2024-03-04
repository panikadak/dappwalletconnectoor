"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const prompts_1 = __importDefault(require("prompts"));
const node_path_1 = __importDefault(require("node:path"));
const createDapp_1 = __importDefault(require("./createDapp"));
const mapTemplateToRepository_1 = __importDefault(require("./mapTemplateToRepository"));
const steps_1 = require("../constants/steps");
const contexts_1 = require("../contexts");
const handleProjectCreation = async () => {
    const folder = (0, contexts_1.getValue)("folder");
    const projectPath = folder.trim().replace(/[\W_]+/g, "-");
    (0, contexts_1.setValue)("projectPath", node_path_1.default.resolve(projectPath));
    let dirExists = fs_extra_1.default.existsSync(folder);
    let i = 1;
    while (dirExists) {
        const response = await (0, prompts_1.default)({
            type: "text",
            name: "folder",
            message: `${steps_1.DIR_VALIDATION_ERROR} \n`,
            initial: folder ? `${folder}-${i}` : `${projectPath}-${i}`,
            validate: value => value?.trim().length > 0,
        });
        (0, contexts_1.setValue)("folder", response.folder);
        const tempPath = response.folder.trim().replace(/[\W_]+/g, "-");
        (0, contexts_1.setValue)("projectPath", node_path_1.default.resolve(tempPath));
        dirExists = fs_extra_1.default.existsSync((0, contexts_1.getValue)("projectPath"));
        i += 1;
    }
    (0, contexts_1.setValue)("baseName", node_path_1.default.basename((0, contexts_1.getValue)("projectPath")));
    const response = await (0, prompts_1.default)({
        type: "confirm",
        name: "installDependencies",
        message: `Would you like to install the dependencies?`,
        initial: true,
    });
    (0, contexts_1.setValue)("installDependencies", response.installDependencies);
    await (0, mapTemplateToRepository_1.default)();
    await (0, createDapp_1.default)();
};
exports.default = handleProjectCreation;
//# sourceMappingURL=handleProjectCreation.js.map