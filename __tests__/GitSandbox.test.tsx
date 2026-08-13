import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GitSandbox from '../components/GitSandbox';

describe('GitSandbox Component', () => {
  it('progresses through the git stages when buttons are clicked', () => {
    // 1. Render the component in our virtual test browser
    render(<GitSandbox />);

    // 2. Check the initial starting state
    expect(screen.getByText('Your local folder is empty.')).toBeInTheDocument();
    
    // 3. Simulate clicking "Write Code"
    const writeButton = screen.getByText('1. Write Code');
    fireEvent.click(writeButton);
    expect(screen.getByText('File saved. (Not tracked yet)')).toBeInTheDocument();

    // 4. Simulate clicking "Git Commit"
    const commitButton = screen.getByText('2. Git Commit');
    fireEvent.click(commitButton);
    expect(screen.getByText('Committed! (Saved to local history)')).toBeInTheDocument();

    // 5. Simulate clicking "Git Push"
    // We use a regular expression /3\. Git Push/i because the button has an arrow icon inside it
    const pushButton = screen.getByText(/3\. Git Push/i);
    fireEvent.click(pushButton);
    expect(screen.getByText('Code is live! Anyone can see it.')).toBeInTheDocument();
  });
});