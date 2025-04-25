import '@testing-library/jest-dom';

// Suppress React 18 act() warnings
const originalError = console.error;
beforeAll(() => {
   console.error = (...args) => {
      if (/Warning: ReactDOM.render is no longer supported in React 18/.test(args[0])) {
         return;
      }
      if (/Warning: `ReactDOMTestUtils.act` is deprecated/.test(args[0])) {
         return;
      }
      if (/Warning: An update to .* inside a test was not wrapped in act/.test(args[0])) {
         return;
      }
      originalError.call(console, ...args);
   };
});

afterAll(() => {
   console.error = originalError;
}); 