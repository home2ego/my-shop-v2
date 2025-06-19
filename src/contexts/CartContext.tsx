import { useState, createContext, type ReactNode } from 'react';
import type ProductDetailsType from '../types/ProductDetailsType';

interface CartType extends ProductDetailsType {
  quantity: number;
}

interface Props {
  children: ReactNode;
}

interface CartContextType {
  cart: CartType[];
  cartCount: number;
  cartSum: number;
  onAddProduct: (newProduct: ProductDetailsType | CartType) => void;
  onRemoveProduct: (product: CartType) => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  cartCount: 0,
  cartSum: 0,
  onAddProduct: () => {},
  onRemoveProduct: () => {},
});

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartType[] | []>([]);

  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const cartSum = cart.reduce(
    (total, product) => total + product.final_price * product.quantity,
    0,
  );

  const handleAddProduct = (newProduct: ProductDetailsType | CartType) => {
    const found = cart.find((product) => product.id === newProduct.id);

    if (found) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product: CartType) => {
    if (product.quantity > 1) {
      const updatedCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        }

        return cartProduct;
      });

      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter(
        (cartProduct) => cartProduct.id !== product.id,
      );

      setCart(updatedCart);
    }
  };

  return (
    <CartContext
      value={{
        cart,
        cartCount,
        cartSum,
        onAddProduct: handleAddProduct,
        onRemoveProduct: handleRemoveProduct,
      }}
    >
      {children}
    </CartContext>
  );
}

export { CartContext, CartProvider };
