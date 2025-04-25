import { ReactNode, JSX } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
   children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
   return (
      <div className={styles.app}>
         <header className={styles.header}>
            <h1>Company Search</h1>
         </header>
         <main className={styles.main}>
            {children}
         </main>
      </div>
   );
};

export default Layout; 