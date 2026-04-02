"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenRouterProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const analysis_prompt_1 = require("../prompts/analysis.prompt");
class OpenRouterProvider {
    constructor() {
        this.name = 'OpenRouter';
    }
    async execute(type, data) {
        const apiKey = process.env.OPENROUTER_API_KEY;
        if (!apiKey)
            throw new Error('OPENROUTER_API_KEY not set');
        const prompt = this.getPrompt(type, data);
        const response = await axios_1.default.post('https://openrouter.ai/api/v1/chat/completions', {
            model: 'anthropic/claude-3-haiku',
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0].message.content;
    }
    getPrompt(type, data) {
        switch (type) {
            case 'analyze':
                return analysis_prompt_1.AnalysisPrompt.generate(data);
            case 'takedown':
                return 'Generate takedown email...'; // placeholder
            case 'seo':
                return 'Generate SEO content...'; // placeholder
            default:
                return 'Default prompt';
        }
    }
}
exports.OpenRouterProvider = OpenRouterProvider;
