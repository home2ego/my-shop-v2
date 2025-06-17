import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { apiGet } from '../api/fetcher';
import Product from '../components/Product';
import type ProductType from '../types/ProductType';
import './Products.scss';

const Products = () => {
  const { data: products } = useSuspenseQuery({
    queryKey: ['products-list'],
    queryFn: () => apiGet<ProductType[]>('products-list'),
  });

  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product: ProductType) =>
    product.name.toLowerCase().includes(query),
  );

  return (
    <>
      <div className="products-title">
        <title>Products | MyShop</title>
        <h1>Products</h1>
        <input
          type="search"
          className="products-title__search"
          name="search"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value.trim().toLowerCase())}
        />
      </div>

      {filteredProducts.length === 0 && (
        <div className="products-not-found">
          <div>
            <h2>No products found!</h2>
            <p>
              Your search &quot;<strong>{query}</strong>&quot; was not found in
              our store.
            </p>
            <button
              className="btn-link btn-link__secondary"
              type="button"
              onClick={() => setQuery('')}
            >
              Reset search
            </button>
          </div>
        </div>
      )}

      <div className="products-grid">
        {filteredProducts.map((product: ProductType) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
