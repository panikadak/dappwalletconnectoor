"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("../constants/cli");
const templates = cli_1.TEMPLATE?.options?.map(item => item.value);
const EnvFilePrefix = {
    nextjs: "NEXT_PUBLIC",
    react: "VITE",
    vanilla: "VITE",
};
const getEnvPrefix = (template) => {
    return EnvFilePrefix[template];
};
exports.default = getEnvPrefix;
//# sourceMappingURL=getEnvPrefix.js.map