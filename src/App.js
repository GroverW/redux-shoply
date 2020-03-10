import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';
import Cart from './Cart';
import NotFound from './NotFound';
import NavBar from './NavBar';


function App() {


  return (
    <div className="App">
      <NavBar />
      <div className='App-container'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
