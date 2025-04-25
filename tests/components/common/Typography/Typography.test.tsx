import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Typography from '../../../../src/components/common/Typography/Typography';

describe('Typography', () => {
   it('renders children correctly', () => {
      const { getByText } = render(<Typography variant="body">Test Text</Typography>);
      expect(getByText('Test Text')).toBeInTheDocument();
   });

   it('applies variant class correctly', () => {
      const { getByText } = render(<Typography variant="h1">Heading</Typography>);
      const element = getByText('Heading');
      expect(element).toHaveClass('h1');
   });

   it('applies className prop correctly', () => {
      const { getByText } = render(<Typography variant="body" className="custom-class">Custom Class</Typography>);
      const element = getByText('Custom Class');
      expect(element).toHaveClass('custom-class');
   });
}); 