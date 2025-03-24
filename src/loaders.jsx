export const shopLoader = async () => {
  const url = 'https://fakestoreapi.com/products';
  const response = await fetch(url, { mode: 'cors' });
  const json = await response.json();
  return json;
};
