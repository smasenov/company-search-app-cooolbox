import { Company, FinancialData, CompanyDetails, BoardMember, Office, Product } from '../types/company';

export const companies: Company[] = [
   {
      id: '1',
      name: 'TechCorp',
      country: 'USA',
      industry: 'Technology',
      founded_year: 2000,
      stock_ticker: 'TECH',
      employee_count: 5000,
      website: 'https://techcorp.com',
      social_media: {
         linkedin: 'https://linkedin.com/company/techcorp',
         twitter: 'https://twitter.com/techcorp'
      }
   },
   {
      id: '2',
      name: 'GreenEnergy',
      country: 'Germany',
      industry: 'Energy',
      founded_year: 2010,
      employee_count: 1200,
      website: 'https://greenenergy.de',
      social_media: {
         linkedin: 'https://linkedin.com/company/greenenergy'
      }
   },
   {
      id: '3',
      name: 'AutoMakers',
      country: 'Japan',
      industry: 'Automotive',
      founded_year: 1980,
      stock_ticker: 'AUTO',
      employee_count: 25000,
      website: 'https://automakers.jp',
      social_media: {
         linkedin: 'https://linkedin.com/company/automakers',
         twitter: 'https://twitter.com/automakers'
      }
   }
];

export const financialData: FinancialData[] = [
   {
      companyId: '1',
      year: 2023,
      revenue: 1000000000,
      net_income: 200000000,
      market_cap: 5000000000,
      stock_price: 250
   },
   {
      companyId: '2',
      year: 2023,
      revenue: 500000000,
      net_income: 50000000
   },
   {
      companyId: '3',
      year: 2023,
      revenue: 2000000000,
      net_income: 300000000,
      market_cap: 8000000000,
      stock_price: 400
   }
];

export const companyDetails: CompanyDetails[] = [
   {
      companyId: '1',
      company_type: 'Public',
      size: 'Large',
      ceo_name: 'John Smith',
      headquarters: 'Silicon Valley',
      description: 'Leading technology company specializing in software solutions'
   },
   {
      companyId: '2',
      company_type: 'Private',
      size: 'Medium',
      ceo_name: 'Anna Müller',
      headquarters: 'Berlin',
      description: 'Innovative renewable energy solutions provider'
   },
   {
      companyId: '3',
      company_type: 'Public',
      size: 'Large',
      ceo_name: 'Taro Yamada',
      headquarters: 'Tokyo',
      description: 'Global automotive manufacturer with focus on electric vehicles'
   }
];

export const boardMembers: BoardMember[] = [
   {
      id: '1',
      companyId: '1',
      name: 'John Smith',
      position: 'CEO',
      tenure_start: 2015,
      is_current: true
   },
   {
      id: '2',
      companyId: '1',
      name: 'Sarah Johnson',
      position: 'CTO',
      tenure_start: 2018,
      is_current: true
   },
   {
      id: '3',
      companyId: '2',
      name: 'Anna Müller',
      position: 'CEO',
      tenure_start: 2012,
      is_current: true
   }
];

export const offices: Office[] = [
   {
      id: '1',
      companyId: '1',
      location: 'Silicon Valley',
      type: 'Headquarters',
      size_sqm: 10000,
      employee_count: 2000
   },
   {
      id: '2',
      companyId: '1',
      location: 'New York',
      type: 'Branch',
      size_sqm: 5000,
      employee_count: 1000
   },
   {
      id: '3',
      companyId: '2',
      location: 'Berlin',
      type: 'Headquarters',
      size_sqm: 8000,
      employee_count: 800
   }
];

export const products: Product[] = [
   {
      id: '1',
      companyId: '1',
      name: 'Enterprise Suite',
      category: 'Software',
      description: 'Comprehensive business management software',
      launch_year: 2015
   },
   {
      id: '2',
      companyId: '2',
      name: 'Solar Panel X1',
      category: 'Hardware',
      description: 'High-efficiency solar panels',
      launch_year: 2018
   },
   {
      id: '3',
      companyId: '3',
      name: 'EcoDrive',
      category: 'Automotive',
      description: 'Electric vehicle platform',
      launch_year: 2020
   }
]; 