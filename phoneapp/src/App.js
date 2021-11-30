import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

import React, { Suspense } from 'react';

import './App.css';
//import Cart from './components/Cart';
import Detail from './components/Detail';
import Default from './components/Default';

const Cart = React.lazy(() => import('./components/Cart'));

function App() {
  return (
    <>
      <Suspense fallback={<div> Loading....</div>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route exact path="/" element={<ProductList />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Router>
      </Suspense>
    </>
  );
}

export default App;
