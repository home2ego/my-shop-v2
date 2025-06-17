import { Link } from 'react-router-dom';
import Price from './Price';
import type ProductType from '../types/ProductType';
import './Product.scss';

interface Props {
  details: ProductType;
}

const Product = ({ details }: Props) => {
  const { id, thumbnail, name, final_price, original_price } = details;

  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <img width="272" height="300" src={thumbnail} alt={name} />
        <h2>{name}</h2>
        <div className="product__price">
          <Price finalPrice={final_price} originalPrice={original_price} />
        </div>
      </Link>
    </div>
  );
};

export default Product;
