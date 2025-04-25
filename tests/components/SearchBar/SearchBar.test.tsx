import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from '../../../src/components/SearchBar/SearchBar';

describe('SearchBar', () => {
   it('renders search input', () => {
      const { getByPlaceholderText } = render(<SearchBar onSearch={() => { }} />);
      expect(getByPlaceholderText('Search companies (min 3 characters)...')).toBeInTheDocument();
   });

   it('calls onSearch when input changes', () => {
      const mockOnSearch = jest.fn();
      const { getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} />);

      const input = getByPlaceholderText('Search companies (min 3 characters)...');
      fireEvent.change(input, { target: { value: 'test' } });

      // Note: The actual search is debounced, so we might need to wait
      expect(mockOnSearch).toHaveBeenCalled();
   });

   it('allows typing in the search input', () => {
      const { getByPlaceholderText } = render(<SearchBar onSearch={() => { }} />);
      const input = getByPlaceholderText('Search companies (min 3 characters)...');

      fireEvent.change(input, { target: { value: 'usa' } });
      expect(input).toHaveValue('usa');
   });
}); 