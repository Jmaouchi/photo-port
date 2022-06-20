import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      {/* this will display only the first category and the reason why is that we set a useState in the App component that will only return the indexe 0
      and it will change we we update the state with the setCurrentCategory function.
      when we click the button that is on the Nav component, it will automaticly change the state to whenever button you clicked
      then this will also effect the Gallery component to display the currentCategory as it is  */}
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      {/* this also will be reliable to the useState */}
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;