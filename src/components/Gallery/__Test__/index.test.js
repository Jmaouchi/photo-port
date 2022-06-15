import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Gallery from "..";


// create the mock 
const portrait = {name: "portraits", description: "Portrais of peoples in my life"}
// this will whipe off any leaking data or left data ...
afterEach(cleanup)


describe('Gallery is rendering', () => {
  it('render', () =>{
    render(<Gallery currentCategory = {portrait} />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders', () => {
    const {getByTestId} = render(<Gallery currentCategory={portrait} />)

    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  })
})