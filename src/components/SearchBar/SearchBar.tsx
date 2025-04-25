import { FC, useEffect } from 'react';
import { useSearch } from '../../utils/hooks';
import styles from './SearchBar.module.scss';
import { SearchResult } from '../../types/search';

interface SearchBarProps {
   onSearch: (results: SearchResult[]) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
   const { searchQuery, setSearchQuery, searchResults, isSearching } = useSearch();

   useEffect(() => {
      onSearch(searchResults);
   }, [searchResults, onSearch]);

   return (
      <div className={styles.searchContainer}>
         <input
            type="text"
            className={styles.searchInput}
            placeholder="Search companies (min 3 characters)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
         />
         {isSearching && <div className={styles.loading}>Searching...</div>}
      </div>
   );
};

export default SearchBar; 