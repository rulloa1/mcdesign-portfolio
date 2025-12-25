import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom classes', () => {
    render(<Button classes="custom-class">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('custom-class');
  });
});
