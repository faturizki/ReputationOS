import { FallbackManager } from './fallback.manager';

export class AIService {
  private fallbackManager: FallbackManager;

  constructor() {
    this.fallbackManager = new FallbackManager();
  }

  async analyzeCase(data: any) {
    return this.fallbackManager.executeWithFallback('analyze', data);
  }

  async generateTakedownEmail(data: any) {
    return this.fallbackManager.executeWithFallback('takedown', data);
  }

  async generateSEOContent(data: any) {
    return this.fallbackManager.executeWithFallback('seo', data);
  }
}