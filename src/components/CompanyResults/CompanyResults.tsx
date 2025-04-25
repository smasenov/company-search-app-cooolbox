import { SearchResult } from '../../types/search';
import CompanyCard from '../CompanyCard/CompanyCard';
import styles from './CompanyResults.module.scss';

interface CompanyResultsProps {
   results: SearchResult[];
}

const CompanyResults = ({ results }: CompanyResultsProps) => {
   if (results.length === 0) {
      return <p className={styles.noResults}>No results found</p>;
   }

   return (
      <div className={styles.results}>
         {results.map((result) => (
            <CompanyCard
               key={result.company.id}
               company={result.company}
               finances={result.finances}
               details={result.details}
            />
         ))}
      </div>
   );
};

export default CompanyResults; 