import React from 'react';
import { render, cleanup } from '@testing-library/react'; // get the render and cleanup methodes from the testing library to test our code
import '@testing-library/jest-dom/extend-expect';
import About from '..';
afterEach(cleanup);


describe('About component', () => {
  // First Test and this test will tell us if we have access to the About componenet or not 
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
})