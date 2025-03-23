import { useEffect, useState } from 'react';
import { getReasonPhrase } from 'http-status-codes';
import Loading from './Loading.jsx';
import ErrorPage from './ErrorPage';
import Cards from './Cards.jsx';

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) {
          throw Error(`${response.status} ${getReasonPhrase(response.status)}`);
        }
        const productsList = await response.json();
        setProducts(productsList);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (products && <Cards products={products} />) || <Loading />;
};

export default Shop;
