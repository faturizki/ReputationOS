"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisPrompt = void 0;
class AnalysisPrompt {
    static generate(data) {
        return `
Analyze the following case for digital reputation management:

Client: ${data.client_name}
Keywords: ${data.keywords.join(', ')}
Risk Score: ${data.risk_score}

Provide a detailed analysis of potential reputation risks and recommended actions.
    `.trim();
    }
}
exports.AnalysisPrompt = AnalysisPrompt;
