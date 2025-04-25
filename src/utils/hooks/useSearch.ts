import { useState, useEffect } from 'react';
import { companies, financialData, companyDetails } from '../../data/mockData';
import { useDebounce } from './useDebounce';
import { type SearchResult } from '../../types/search';

export const useSearch = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const debouncedQuery = useDebounce(searchQuery);
   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
   const [isSearching, setIsSearching] = useState(false);

   // Perform the search
   useEffect(() => {
      if (debouncedQuery.length < 3) {
         setSearchResults([]);
         setIsSearching(false);
         return;
      }

      setIsSearching(true);

      const results = companies
         .map(company => {
            const companyFinances = financialData.filter(f => f.companyId === company.id);
            const companyDetail = companyDetails.find(d => d.companyId === company.id);

            const searchableText = [
               company.name,
               company.country,
               company.industry,
               company.founded_year.toString(),
               companyDetail?.company_type,
               companyDetail?.size,
               companyDetail?.ceo_name,
               companyDetail?.headquarters,
               ...companyFinances.map(f => f.year.toString()),
               ...companyFinances.map(f => f.revenue.toString()),
               ...companyFinances.map(f => f.net_income.toString())
            ].join(' ').toLowerCase();

            return {
               company,
               finances: companyFinances,
               details: companyDetail,
               searchableText
            };
         })
         .filter(item =>
            item.searchableText.includes(debouncedQuery.toLowerCase())
         );

      setSearchResults(results);
      setIsSearching(false);
   }, [debouncedQuery]);

   return {
      searchQuery,
      setSearchQuery,
      searchResults,
      isSearching
   };
}; 