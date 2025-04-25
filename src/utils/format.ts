export const formatCurrency = (value: number): string => {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   }).format(value);
};

export const formatNumber = (value: number): string => {
   return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   }).format(value);
};

export const formatDate = (date: string): string => {
   return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
   }).format(new Date(date));
}; 