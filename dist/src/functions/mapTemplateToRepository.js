"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../constants/app"));
const contexts_1 = require("../contexts");
const mapTemplateToRepository = async () => {
    const template = (0, contexts_1.getValue)("template");
    const templateMap = {
        nextjs: `next-starter-template-${(0, contexts_1.getValue)("library")}`,
        react: `react-starter-template-${(0, contexts_1.getValue)("library")}`,
        vanilla: `vanilla-starter-template-${(0, contexts_1.getValue)("library")}`,
    };
    (0, contexts_1.setValue)("template", templateMap[template]);
    (0, contexts_1.setValue)("repository", app_1.default.baseURL);
};
exports.default = mapTemplateToRepository;
//# sourceMappingURL=mapTemplateToRepository.js.map