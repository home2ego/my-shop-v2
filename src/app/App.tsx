import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

import type User from '../types/User';
import './App.css';

const App = () => {
  const [user, setUser] = useState<User | null>(null);

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
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart user={user} />} />

          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
