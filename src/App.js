
import './App.css';
//import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
//import ProductList from './components/ProductList/ProductList';
//import { ProductList } from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>              
               <header>
                  <Header />
                </header>
            </React.Fragment>
          } />
          <Route exact path='/Cart' element={
            <React.Fragment>
              <Cart />
            </React.Fragment>
          } />
        </Routes>
      <footer>
        <Footer />
      </footer>
      </Router>
      
    </div>
  );
}

export default App;
