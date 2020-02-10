import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  const testButtonLabel = 'Test Button';
  const testHandleClick = jest.fn();

  const { getByText } = render(
    <Button onClick={testHandleClick}>{testButtonLabel}</Button>
  );

  fireEvent.click(getByText(testButtonLabel));

  it('renders a button with a text label', () => {
    expect(getByText(testButtonLabel)).toBeInTheDocument();
  });

  it('calls "onClick" prop on button click', () => {
    expect(testHandleClick).toHaveBeenCalled();
  });
});
