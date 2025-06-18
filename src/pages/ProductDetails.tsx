import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CartContext } from '../contexts/CartContext';
import { apiGet } from '../api/fetcher';
import Price from '../components/Price';
import type ProductDetailsType from '../types/ProductDetailsType';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { onAddProduct } = useContext(CartContext);

  const { data } = useSuspenseQuery({
    queryKey: ['products/details', id],
    queryFn: () => apiGet<ProductDetailsType[]>(`products?id=eq.${id}`),
  });

  const product = data[0];

  return (
    <>
      <title>{`${product.name} | MyShop`}</title>

      <Link to="/products" className="back">
        &lsaquo; Back to products
      </Link>

      <div className="details">
        <div className="details__left">
          <img
            src={product.thumbnail}
            alt={product.name}
            width="200"
            height="220"
          />

          <table className="nutrition">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Protein</td>
                <td>{product.nutrition.protein}g</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>{product.nutrition.carbs}g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{product.nutrition.fat}g</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h1 className="details__name">{product.name}</h1>
          <p className="details__price">
            <Price
              finalPrice={product.final_price}
              originalPrice={product.original_price}
            />
          </p>
          <p
            className="text-dimmed details__description"
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />
          <button
            type="button"
            className="btn-link btn-link__secondary"
            onClick={() => onAddProduct(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
