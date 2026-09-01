// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockSyncPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockSyncPlus/i);
    expect(titleElement).toBeInTheDocument();
});
