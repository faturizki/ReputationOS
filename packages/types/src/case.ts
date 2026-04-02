export interface Case {
  id: string;
  client_name: string;
  keywords: string[];
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  risk_score: number;
  difficulty_level: 'low' | 'medium' | 'high';
  created_at: Date;
}

export interface Task {
  id: string;
  case_id: string;
  type: string;
  description: string;
  assigned_to?: string;
  status: 'pending' | 'in_progress' | 'completed';
  due_date?: Date;
}

export interface Strategy {
  id: string;
  case_id: string;
  actions: any; // JSON
  estimated_duration: number;
}

export interface ScanResult {
  id: string;
  case_id: string;
  url: string;
  title: string;
  snippet: string;
  sentiment_score: number;
  risk_flag: boolean;
}

export interface Ranking {
  id: string;
  keyword: string;
  url: string;
  position: number;
  date: Date;
}