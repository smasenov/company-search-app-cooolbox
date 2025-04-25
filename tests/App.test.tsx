import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
   it('renders SearchBar component', () => {
      const { getByPlaceholderText } = render(<App />);
      expect(getByPlaceholderText('Search companies (min 3 characters)...')).toBeInTheDocument();
   });

   it('renders CompanyResults component with no results', () => {
      const { getByText } = render(<App />);
      expect(getByText('No results found')).toBeInTheDocument();
   });
}); 