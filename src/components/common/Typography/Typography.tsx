import { ReactNode } from 'react';
import styles from './Typography.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'label' | 'value';

interface TypographyProps {
   variant: Variant;
   children: ReactNode;
   className?: string;
}

const Typography = ({ variant, children, className = '' }: TypographyProps) => {
   const Component = variant === 'body' ? 'p' : (variant === 'label' || variant === 'value' ? 'span' : variant);
   const variantClass = styles[variant];

   return (
      <Component className={`${variantClass} ${className}`}>
         {children}
      </Component>
   );
};

export default Typography; 