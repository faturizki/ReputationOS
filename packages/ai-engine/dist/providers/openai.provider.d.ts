export declare class OpenAIProvider {
    name: string;
    private client;
    constructor();
    execute(type: string, data: any): Promise<any>;
    private getPrompt;
}
