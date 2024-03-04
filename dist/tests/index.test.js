"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const cli_1 = require("../src/constants/cli");
const contexts_1 = require("../src/contexts");
const index_1 = require("../src/index");
(0, globals_1.describe)("Command Line Checks", () => {
    (0, globals_1.test)("Folder only", () => {
        const contexts = (0, contexts_1.getAllValues)();
        const folder = "hello-world";
        process.argv.push(folder);
        (0, index_1.argParse)();
        (0, globals_1.expect)(contexts.folder).toBe(folder);
        (0, globals_1.expect)(contexts.template).toBeFalsy();
    });
    (0, globals_1.test)("Template only", () => {
        const contexts = (0, contexts_1.getAllValues)();
        const template = cli_1.TEMPLATE.options && cli_1.TEMPLATE.options[0].value;
        process.argv.push("-t", template);
        (0, index_1.argParse)();
        (0, globals_1.expect)(contexts.template).toBe(template);
    });
    (0, globals_1.test)("Folder and Template", () => {
        const contexts = (0, contexts_1.getAllValues)();
        const folder = "hello-world";
        const template = cli_1.TEMPLATE.options && cli_1.TEMPLATE.options[0].value;
        process.argv.push(folder, "-t", template);
        (0, index_1.argParse)();
        (0, globals_1.expect)(contexts.folder).toBe(folder);
        (0, globals_1.expect)(contexts.template).toBe(template);
    });
});
//# sourceMappingURL=index.test.js.map