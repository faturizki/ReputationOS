import { CaseService } from './case.service';
import { Case } from '@reputation-os/types';
export declare class CaseController {
    private readonly caseService;
    constructor(caseService: CaseService);
    create(createCaseDto: Omit<Case, 'id' | 'created_at'>): Promise<{
        id: string;
        created_at: Date;
        client_name: string;
        keywords: string[];
        status: string;
        risk_score: number;
        difficulty_level: string;
    }>;
    findAll(): Promise<{
        id: string;
        created_at: Date;
        client_name: string;
        keywords: string[];
        status: string;
        risk_score: number;
        difficulty_level: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        created_at: Date;
        client_name: string;
        keywords: string[];
        status: string;
        risk_score: number;
        difficulty_level: string;
    }>;
}
