"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const picocolors_1 = require("picocolors");
const node_child_process_1 = require("node:child_process");
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
const process_1 = __importDefault(require("process"));
const cleanUp_1 = __importDefault(require("./cleanUp"));
const log_1 = require("./log");
const wcText_1 = require("./wcText");
const steps_1 = require("../constants/steps");
const contexts_1 = require("../contexts");
const postInstall = (folder) => {
    const packageManager = (0, contexts_1.getValue)("packageManager");
    const baseFolderName = (0, contexts_1.getValue)("folder");
    console.clear();
    (0, log_1.log)((0, wcText_1.wcText)(`\n${steps_1.READY_TEXT}\n\n`) + steps_1.STEPS_TEXT);
    (0, log_1.log)((0, steps_1.STEPS)(baseFolderName, packageManager));
    (0, log_1.log)((0, picocolors_1.gray)(steps_1.DELETING_TEXT));
    (0, cleanUp_1.default)(folder);
};
const cloneAndCopy = () => {
    const progressBar = (0, contexts_1.getProgressBar)();
    const projectID = (0, contexts_1.getValue)("projectID");
    const repository = (0, contexts_1.getValue)("repository");
    const template = (0, contexts_1.getValue)("template");
    const projectPath = (0, contexts_1.getValue)("projectPath");
    const installDependencies = (0, contexts_1.getValue)("installDependencies");
    fs_extra_1.default.mkdtemp(node_path_1.default.join(node_os_1.default.tmpdir(), "wc-"), async (err, folder) => {
        if (err)
            throw err;
        const envPrefix = (0, contexts_1.getValue)("envPrefix");
        (0, node_child_process_1.execSync)(`git clone --depth 1 ${repository} ${folder}`, {
            stdio: "pipe",
        });
        fs_extra_1.default.copySync(node_path_1.default.join(folder, `core/${template}`), projectPath);
        fs_extra_1.default.writeFileSync(node_path_1.default.join(projectPath, ".env"), `SKIP_PREFLIGHT_CHECK=true\n${envPrefix}_PROJECT_ID="${projectID}"`);
        progressBar.stop();
        const packageManager = (0, contexts_1.getValue)("packageManager");
        // Remove other lock files except the one for the package manager selected if they exist
        const lockFiles = Object.values(steps_1.MAP_PACKAGE_MANAGER_LOCK).map(lockFile => node_path_1.default.join(projectPath, lockFile));
        const lockFileToKeep = node_path_1.default.join(projectPath, steps_1.MAP_PACKAGE_MANAGER_LOCK[packageManager]);
        lockFiles.forEach(lockFile => {
            if (lockFile !== lockFileToKeep && fs_extra_1.default.existsSync(lockFile)) {
                fs_extra_1.default.removeSync(lockFile);
            }
        });
        if (installDependencies) {
            console.clear();
            const child = (0, node_child_process_1.spawn)(`cd '${projectPath}' && ${steps_1.STEPS_FOR_PACKAGE_MANAGER[packageManager][0]}`, {
                stdio: "inherit",
                shell: true,
            });
            child.on("exit", () => {
                postInstall(folder);
                process_1.default.exit();
            });
        }
        else {
            postInstall(folder);
        }
    });
};
exports.default = cloneAndCopy;
//# sourceMappingURL=cloneAndCopy.js.map