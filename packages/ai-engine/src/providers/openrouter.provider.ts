import axios from 'axios';
import { AnalysisPrompt } from '../prompts/analysis.prompt';

export class OpenRouterProvider {
  name = 'OpenRouter';

  async execute(type: string, data: any): Promise<any> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) throw new Error('OPENROUTER_API_KEY not set');

    const prompt = this.getPrompt(type, data);

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'anthropic/claude-3-haiku',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  }

  private getPrompt(type: string, data: any): string {
    switch (type) {
      case 'analyze':
        return AnalysisPrompt.generate(data);
      case 'takedown':
        return 'Generate takedown email...'; // placeholder
      case 'seo':
        return 'Generate SEO content...'; // placeholder
      default:
        return 'Default prompt';
    }
  }
}