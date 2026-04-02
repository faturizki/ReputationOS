"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIProvider = void 0;
const openai_1 = __importDefault(require("openai"));
const analysis_prompt_1 = require("../prompts/analysis.prompt");
class OpenAIProvider {
    constructor() {
        this.name = 'OpenAI';
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey)
            throw new Error('OPENAI_API_KEY not set');
        this.client = new openai_1.default({ apiKey });
    }
    async execute(type, data) {
        const prompt = this.getPrompt(type, data);
        const response = await this.client.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0].message.content;
    }
    getPrompt(type, data) {
        switch (type) {
            case 'analyze':
                return analysis_prompt_1.AnalysisPrompt.generate(data);
            case 'takedown':
                return 'Generate takedown email...';
            case 'seo':
                return 'Generate SEO content...';
            default:
                return 'Default prompt';
        }
    }
}
exports.OpenAIProvider = OpenAIProvider;
