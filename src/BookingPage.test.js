import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BookingPage from './BookingPage';

test('disables the "Continue" button if any field is empty', () => {
  const { getByLabelText, getByRole } = render(<BookingPage />);

  const button = getByRole('button', { name: /continue/i });

  expect(button.disabled).toBe(true);

  fireEvent.change(getByLabelText('Date'), { target: { value: '2023-02-25' } });
  expect(button.disabled).toBe(true);

  fireEvent.change(getByLabelText('Time'), { target: { value: '18:00' } });
  expect(button.disabled).toBe(true);

  fireEvent.change(getByLabelText('Number of People'), { target: { value: '2' } });
  expect(button.disabled).toBe(true);

});
