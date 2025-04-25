import { type ReactNode, type JSX } from 'react';
import styles from './CardContent.module.scss';

interface CardContentProps {
   children: ReactNode;
}

const CardContent = ({ children }: CardContentProps): JSX.Element => {
   return <div className={styles.cardContent}>{children}</div>
}

export default CardContent;