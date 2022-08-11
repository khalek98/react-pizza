import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from './components/Header';
import './scss/app.scss';

const FullPizza = lazy(() => import('./pages/FullPizza'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Cart = lazy(() => import('./pages/Cart'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="/pizza/:id"
              element={
                <Suspense>
                  <FullPizza />
                </Suspense>
              }
            />
            <Route path="/page404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/page404" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
