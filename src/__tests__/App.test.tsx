import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App Component', () => {
  it('should render the App component correctly', () => {
    // Render the App component
    render(<App />);

    // Assert that the component renders the text "App"
    expect(screen.getByText('App')).toBeDefined();
  });
});
