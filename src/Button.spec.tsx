import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
});