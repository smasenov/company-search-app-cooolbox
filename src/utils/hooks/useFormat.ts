export const useFormat = () => {
   const formatCurrency = (amount: number): string => {
      return new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD',
         maximumFractionDigits: 0
      }).format(amount);
   };

   const formatNumber = (number: number): string => {
      return new Intl.NumberFormat('en-US').format(number);
   };

   const formatDate = (date: Date | string): string => {
      return new Intl.DateTimeFormat('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      }).format(new Date(date));
   };

   return {
      formatCurrency,
      formatNumber,
      formatDate
   };
}; 