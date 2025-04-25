import { Company, FinancialData, CompanyDetails } from '../../types/company';
import { formatCurrency, formatDate } from '../../utils/format';
import { CardContent, Typography, DetailsCard } from '../../components';
import styles from './CompanyCard.module.scss';

interface CompanyCardProps {
   company: Company;
   finances: FinancialData[];
   details: CompanyDetails | undefined;
}

const CompanyCard = ({ company, finances, details }: CompanyCardProps) => {
   const latestFinancials = finances[finances.length - 1];

   return (
      <div className={styles.card}>
         <div className={styles.header}>
            <Typography variant="h2" className={styles.name}>{company.name}</Typography>
            <Typography variant="body">{company.industry}</Typography>
         </div>

         <DetailsCard title="Company Details">
            <CardContent>
               <Typography variant="label">Country</Typography>
               <Typography variant="value">{company.country}</Typography>
            </CardContent>
            <CardContent>
               <Typography variant="label">Founded</Typography>
               <Typography variant="value">{formatDate(company.founded_year.toString())}</Typography>
            </CardContent>
            {details && (
               <>
                  <CardContent>
                     <Typography variant="label">Type</Typography>
                     <Typography variant="value">{details.company_type}</Typography>
                  </CardContent>
                  <CardContent>
                     <Typography variant="label">Size</Typography>
                     <Typography variant="value">{details.size}</Typography>
                  </CardContent>
                  <CardContent>
                     <Typography variant="label">CEO</Typography>
                     <Typography variant="value">{details.ceo_name}</Typography>
                  </CardContent>
                  <CardContent>
                     <Typography variant="label">Headquarters</Typography>
                     <Typography variant="value">{details.headquarters}</Typography>
                  </CardContent>
               </>
            )}
         </DetailsCard>

         {latestFinancials && (
            <DetailsCard title={`Financial Data (${latestFinancials.year})`}>
               <div className={styles.financialGrid}>
                  <CardContent>
                     <Typography variant="label">Revenue</Typography>
                     <Typography variant="value">{formatCurrency(latestFinancials.revenue)}</Typography>
                  </CardContent>
                  <CardContent>
                     <Typography variant="label">Net Income</Typography>
                     <Typography variant="value">{formatCurrency(latestFinancials.net_income)}</Typography>
                  </CardContent>
               </div>
            </DetailsCard>
         )}
      </div>
   );
};

export default CompanyCard; 