import { formatCurrency, formatNumber, formatDate } from '../../src/utils/format';

describe('format utilities', () => {
   describe('formatCurrency', () => {
      it('formats positive numbers correctly', () => {
         expect(formatCurrency(1000)).toBe('$1,000');
         expect(formatCurrency(1000000)).toBe('$1,000,000');
      });

      it('formats zero correctly', () => {
         expect(formatCurrency(0)).toBe('$0');
      });

      it('formats negative numbers correctly', () => {
         expect(formatCurrency(-1000)).toBe('-$1,000');
      });
   });

   describe('formatNumber', () => {
      it('formats positive numbers correctly', () => {
         expect(formatNumber(1000)).toBe('1,000');
         expect(formatNumber(1000000)).toBe('1,000,000');
      });

      it('formats zero correctly', () => {
         expect(formatNumber(0)).toBe('0');
      });

      it('formats negative numbers correctly', () => {
         expect(formatNumber(-1000)).toBe('-1,000');
      });
   });

   describe('formatDate', () => {
      it('formats valid dates correctly', () => {
         expect(formatDate('2020-01-01')).toBe('Jan 1, 2020');
         expect(formatDate('2023-12-31')).toBe('Dec 31, 2023');
      });

      it('handles invalid dates gracefully', () => {
         expect(() => formatDate('invalid-date')).toThrow();
      });
   });
});
