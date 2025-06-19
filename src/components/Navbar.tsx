import { useContext, useLayoutEffect, useState, type FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import type User from '../types/User';
import darkIcon from '../assets/dark.svg'
import lightIcon from '../assets/light.svg'
import './Navbar.css';

interface Props {
  user: User | null;
}

const Navbar: FC<Props> = ({ user }) => {
  const [light, setLight] = useState(
    () => window.matchMedia('(prefers-color-scheme: light)').matches,
  );

  useLayoutEffect(() => {
    if (!light) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [light]);

  const { cartCount } = useContext(CartContext);

  return (
    <div className="nav container">
      <Link className="logo" to="/">
        MyShop
      </Link>

      <nav className="nav__content">
        <button
          type="button"
          className="theme-switcher"
          onClick={() => setLight(!light)}
        >
          <img
            src={light ? lightIcon : darkIcon}
            width="24"
            height="24"
            alt={light ? 'Light theme' : 'Dark theme'}
          />
        </button>

        <ul className="nav__list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {user ? (
              <NavLink to="/profile">Profile</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? 'btn-link btn-link__primary active'
              : 'btn-link btn-link__primary'
          }
        >
          Cart <span className="btn-link__space">({cartCount})</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
