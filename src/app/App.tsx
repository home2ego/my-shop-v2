import { Suspense, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Landing from '../pages/Landing';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

import type User from '../types/User';
import './App.scss';

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  function handleUserLogin(newUser: User) {
    setUser(newUser);
  }

  function handleUserLogout() {
    setUser(null);
  }

  return (
    <>
      <div className="nav-wrapper">
        <Navbar user={user} />
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/login"
            element={<Login onUserLogin={handleUserLogin} />}
          />

          <Route
            path="/profile"
            element={<Profile user={user} onUserLogout={handleUserLogout} />}
          />

          <Route
            path="/products"
            element={
              <Suspense fallback={<Loader />} key={location.pathname}>
                <Products />
              </Suspense>
            }
          />

          <Route
            path="/products/:id"
            element={
              <Suspense fallback={<Loader />} key={location.pathname}>
                <ProductDetails />
              </Suspense>
            }
          />

          <Route path="/cart" element={<Cart user={user} />} />

          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
