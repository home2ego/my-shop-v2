import { useImageLoaded } from '../hooks/useImageLoaded';
import { Link } from 'react-router-dom';
import Price from './Price';
import type ProductType from '../types/ProductType';
import './Product.css';

interface Props {
  details: ProductType;
}

const Product = ({ details }: Props) => {
  const { loaded, handleLoad } = useImageLoaded();
  const { id, thumbnail, name, final_price, original_price } = details;

  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <img
          width="200"
          height="220"
          src={thumbnail}
          alt={name}
          className={loaded ? 'avatar image-fade loaded' : 'avatar image-fade'}
          onLoad={handleLoad}
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
