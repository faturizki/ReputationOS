import { OpenRouterProvider } from '../providers/openrouter.provider';
import { OpenAIProvider } from '../providers/openai.provider';
// import { SecondaryProvider } from '../providers/secondary.provider';

interface Provider {
  name: string;
  execute(type: string, data: any): Promise<any>;
}

export class FallbackManager {
  private providers: Provider[] = [
    new OpenRouterProvider(),
    // new SecondaryProvider(),
    new OpenAIProvider(),
  ];

  async executeWithFallback(type: string, data: any): Promise<any> {
    for (const provider of this.providers) {
      try {
        console.log(`Trying provider: ${provider.name}`);
        const result = await provider.execute(type, data);
        return result;
      } catch (error) {
        console.error(`Provider ${provider.name} failed:`, error);
        // Continue to next provider
      }
    }
    throw new Error('All providers failed');
  }
}