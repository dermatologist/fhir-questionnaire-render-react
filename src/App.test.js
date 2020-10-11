import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders FHIR Questionnaire edit header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/FHIR Questionnaire/i);
  expect(linkElement).toBeInTheDocument();
});
