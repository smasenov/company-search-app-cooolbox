export interface Company {
   id: string;
   name: string;
   country: string;
   industry: string;
   founded_year: number;
   stock_ticker?: string;
   employee_count: number;
   website: string;
   social_media?: {
      linkedin?: string;
      twitter?: string;
   };
}

export interface FinancialData {
   companyId: string;
   year: number;
   revenue: number;
   net_income: number;
   market_cap?: number;
   stock_price?: number;
}

export interface CompanyDetails {
   companyId: string;
   company_type: 'Public' | 'Private';
   size: 'Small' | 'Medium' | 'Large';
   ceo_name: string;
   headquarters: string;
   description: string;
}

export interface BoardMember {
   id: string;
   companyId: string;
   name: string;
   position: string;
   tenure_start: number;
   tenure_end?: number;
   is_current: boolean;
}

export interface Office {
   id: string;
   companyId: string;
   location: string;
   type: 'Headquarters' | 'Branch' | 'Warehouse' | 'Factory';
   size_sqm: number;
   employee_count: number;
}

export interface Product {
   id: string;
   companyId: string;
   name: string;
   category: string;
   description: string;
   launch_year: number;
}

export interface CompanyWithDetails extends Company {
   financialData: FinancialData[];
   details: CompanyDetails;
   boardMembers: BoardMember[];
   offices: Office[];
   products: Product[];
} 