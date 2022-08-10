import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import './scss/app.scss';

const FullPizza = lazy(() => import('./pages/FullPizza'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="/page404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/page404" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
