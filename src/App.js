import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false)

  const [categories] = useState([
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects'},
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} //this is the category with index of 0
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main> 
        {!contactSelected ? // the ? means if this is true then do this and here we are saying if the contactSelected is false then do this,
        // which is false on out useState
        //if the contactSelected is false, the Gallery and About components should be rendered, 
        //but if contactedSelected is true, the ContactForm component should be rendered.
        (<>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </>
        ):( // the : means else 
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
