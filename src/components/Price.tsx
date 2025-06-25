import type { FC } from 'react';
import formatPrice from '../utils/formatPrice';
import './Price.css';

interface Props {
  originalPrice: number;
  finalPrice: number;
}

const Price: FC<Props> = ({ originalPrice, finalPrice }) => {
  return (
    <>
      ${formatPrice(finalPrice)}
      {finalPrice !== originalPrice && (
        <span className="price-old">${formatPrice(originalPrice)}</span>
      )}
    </>
  );
};

export default Price;
