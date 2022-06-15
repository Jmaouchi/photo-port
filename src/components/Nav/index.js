import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) { // this is the Nav component 

  // this methode belongs to react and we use this to update the  the tab on the browser to reflect whatever you want 
  useEffect(() => {
    document.title = capitalizeFirstLetter(props.currentCategory.name);
  }, [props.currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {props.categories.map((category) => ( // this will map through the categories on the App component 
            // so here we will see if the currentCategory is = to category.name and if so call the setCurrentCategory and add the navActive 
            //currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned.
            // if we will look to the App component, the usestate is set to the index 0 so here by default it will add the color to the first index
            // then if we want to change that, we need to call the setCurrentCategory function and it will increment the index after we click
            <li className={`mx-1 ${ props.currentCategory.name === category.name && 'navActive'}`} key={category.name}>
              {/* change the state here */}
              <span onClick={() => { props.setCurrentCategory(category)}}> 
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;