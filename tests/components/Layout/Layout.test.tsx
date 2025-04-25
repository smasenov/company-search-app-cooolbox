import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../../../src/components/Layout/Layout';

describe('Layout', () => {
   it('renders children correctly', () => {
      const { getByTestId, getByText } = render(
         <Layout>
            <div data-testid="test-child">Test Content</div>
         </Layout>
      );

      expect(getByTestId('test-child')).toBeInTheDocument();
      expect(getByText('Test Content')).toBeInTheDocument();
   });

   it('renders header with correct title', () => {
      const { getByText } = render(<Layout><div /></Layout>);
      expect(getByText('Company Search')).toBeInTheDocument();
   });

   it('has correct structure with header and main elements', () => {
      const { getByRole } = render(<Layout><div /></Layout>);

      const header = getByRole('banner');
      const main = getByRole('main');

      expect(header).toBeInTheDocument();
      expect(main).toBeInTheDocument();
   });
}); 