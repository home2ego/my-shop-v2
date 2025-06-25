import { useContext, type FC } from 'react';
import { useImageLoaded } from '../hooks/useImageLoaded';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import formatProductName from '../utils/formatProductName';
import type User from '../types/User';
import './Cart.css';
import formatPrice from '../utils/formatPrice';

interface Props {
  user: User | null;
}

const Cart: FC<Props> = ({ user }) => {
  const { loaded, handleLoad } = useImageLoaded();
  const { cart, cartSum, onAddProduct, onRemoveProduct } =
    useContext(CartContext);

  return (
    <div className="content-wrapper">
      {cart.length === 0 ? (
        <>
          <title>Cart | MyShop</title>
          <h1>Your cart</h1>

          <p className="cart-empty">
            Your cart is empty. Add a product from the{' '}
            <Link to="/products">products</Link> page.
          </p>
        </>
      ) : (
        <>
          <title>Cart | MyShop</title>
          <h1>Your cart</h1>

          {cart.map((product) => (
            <div key={product.id} className="cart">
              <img
                src={product.thumbnail}
                alt={product.name}
                width="126"
                height="84"
                className={
                  loaded ? 'avatar image-fade loaded' : 'avatar image-fade'
                }
                onLoad={handleLoad}
              />

              <div className="cart__details">
                <p>
                  {product.name.includes(' ')
                    ? formatProductName(product.name)
                    : product.name}
                </p>

                <div className="cart__buttons">
                  <p>{product.quantity}</p>

                  <button type="button" onClick={() => onAddProduct(product)}>
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => onRemoveProduct(product)}
                  >
                    -
                  </button>
                </div>

                <div className="cart__price">
                  <p>${formatPrice(product.final_price)}</p>
                  <p>${formatPrice(product.final_price * product.quantity)}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total:</h2>
            <p>${formatPrice(cartSum)}</p>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            <label className="label" htmlFor="emailId">
              Email<span className="required">*</span>:
            </label>
            <input
              id="emailId"
              type="email"
              className="input"
              placeholder="Enter your email"
              defaultValue={user ? user.email : ''}
            />

            <p className="text-dimmed cart-notice">
              Enter your email and then click on pay and your products will be
              delivered to you the same day!
            </p>

            <p className="cart-warning">
              This is a demo, so the form does not submit any data.
            </p>

            <input
              type="submit"
              value="Pay"
              className="btn-link btn-link__secondary"
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
