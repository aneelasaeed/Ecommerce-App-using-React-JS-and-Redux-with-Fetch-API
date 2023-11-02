import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product'; // Import the Product component
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} /> {/* Correct the 'Component' prop to 'component' */}
        <Route exact path='/product' component={Product} /> {/* Add the Product component */}
      </Switch>
    </>
  );
}

export default App;

 