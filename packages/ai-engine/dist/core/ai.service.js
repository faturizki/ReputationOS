"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const fallback_manager_1 = require("./fallback.manager");
class AIService {
    constructor() {
        this.fallbackManager = new fallback_manager_1.FallbackManager();
    }
    async analyzeCase(data) {
        return this.fallbackManager.executeWithFallback('analyze', data);
    }
    async generateTakedownEmail(data) {
        return this.fallbackManager.executeWithFallback('takedown', data);
    }
    async generateSEOContent(data) {
        return this.fallbackManager.executeWithFallback('seo', data);
    }
}
exports.AIService = AIService;
