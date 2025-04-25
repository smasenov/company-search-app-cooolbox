import { ReactNode } from 'react';
import styles from './DetailsCard.module.scss';

interface DetailsCardProps {
   title: string;
   children: ReactNode;
}

const DetailsCard = ({ title, children }: DetailsCardProps) => {
   return (
      <div className={styles.card}>
         <h3 className={styles.title}>{title}</h3>
         <div className={styles.content}>
            {children}
         </div>
      </div>
   );
};

export default DetailsCard; 