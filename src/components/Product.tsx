import { useState } from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import type ProductType from '../types/ProductType';
import './Product.css';

interface Props {
  details: ProductType;
}

const Product = ({ details }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const { id, thumbnail, name, final_price, original_price } = details;

  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <img
          width="200"
          height="220"
          src={thumbnail}
          alt={name}
          className={loaded ? 'loaded' : ''}
          onLoad={() => setLoaded(true)}
        />
        <h2>{name}</h2>
        <div className="product__price">
          <Price finalPrice={final_price} originalPrice={original_price} />
        </div>
      </Link>
    </div>
  );
};

export default Product;
