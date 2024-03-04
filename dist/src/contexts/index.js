"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllValues = exports.getValue = exports.setValue = exports.getProgressBar = exports.setProgressBar = void 0;
const context = {
    template: null,
    folder: null,
    repository: null,
    projectPath: null,
    baseName: null,
    packageManager: null,
    envPrefix: null,
    projectID: null,
    library: null,
    installDependencies: false,
};
const progressContext = {
    progress: null,
};
const setProgressBar = (progress) => {
    progressContext.progress = progress;
    return progressContext.progress;
};
exports.setProgressBar = setProgressBar;
const getProgressBar = () => {
    return progressContext.progress;
};
exports.getProgressBar = getProgressBar;
const setValue = (key, value) => {
    context[key] = value;
    return context[key];
};
exports.setValue = setValue;
const getValue = (key) => {
    return context[key];
};
exports.getValue = getValue;
const getAllValues = () => {
    return context;
};
exports.getAllValues = getAllValues;
//# sourceMappingURL=index.js.map