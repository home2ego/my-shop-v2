import type { FC } from "react";
import "./Price.css";

interface Props {
  originalPrice: number;
  finalPrice: number;
}

const Price: FC<Props> = ({ originalPrice, finalPrice }) => {
  return (
    <>
      ${(finalPrice / 100).toFixed(2)}
      {finalPrice !== originalPrice && (
        <span className="price-old">${(originalPrice / 100).toFixed(2)}</span>
      )}
    </>
  );
};

export default Price;
