import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the sign-in form when not logged in', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.queryByText('Events')).not.toBeInTheDocument();

    // You can add more assertions as needed
  });

  // Add more tests for other scenarios
});
