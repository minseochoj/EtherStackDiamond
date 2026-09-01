// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherStackDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherStackDiamond/i);
    expect(titleElement).toBeInTheDocument();
});
