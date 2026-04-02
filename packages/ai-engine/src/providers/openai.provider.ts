import OpenAI from 'openai';
import { AnalysisPrompt } from '../prompts/analysis.prompt';

export class OpenAIProvider {
  name = 'OpenAI';
  private client: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error('OPENAI_API_KEY not set');
    this.client = new OpenAI({ apiKey });
  }

  async execute(type: string, data: any): Promise<any> {
    const prompt = this.getPrompt(type, data);

    const response = await this.client.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    return response.choices[0].message.content;
  }

  private getPrompt(type: string, data: any): string {
    switch (type) {
      case 'analyze':
        return AnalysisPrompt.generate(data);
      case 'takedown':
        return 'Generate takedown email...';
      case 'seo':
        return 'Generate SEO content...';
      default:
        return 'Default prompt';
    }
  }
}