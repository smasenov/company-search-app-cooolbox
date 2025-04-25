import { Company, FinancialData, CompanyDetails } from './company';

export interface SearchResult {
   company: Company;
   finances: FinancialData[];
   details: CompanyDetails | undefined;
   searchableText: string;
} 