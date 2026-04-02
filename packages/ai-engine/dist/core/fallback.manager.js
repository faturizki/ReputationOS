"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackManager = void 0;
const openrouter_provider_1 = require("../providers/openrouter.provider");
const openai_provider_1 = require("../providers/openai.provider");
class FallbackManager {
    constructor() {
        this.providers = [
            new openrouter_provider_1.OpenRouterProvider(),
            // new SecondaryProvider(),
            new openai_provider_1.OpenAIProvider(),
        ];
    }
    async executeWithFallback(type, data) {
        for (const provider of this.providers) {
            try {
                console.log(`Trying provider: ${provider.name}`);
                const result = await provider.execute(type, data);
                return result;
            }
            catch (error) {
                console.error(`Provider ${provider.name} failed:`, error);
                // Continue to next provider
            }
        }
        throw new Error('All providers failed');
    }
}
exports.FallbackManager = FallbackManager;
