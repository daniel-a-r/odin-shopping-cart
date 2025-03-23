import Card from './Card.jsx';
import './Cards.css'

const Cards = ({ products }) => {
  const productCardList = products.map((product) => {
    return (
      <Card
        key={product.id}
        imageURL={product.image}
        price={product.price}
        title={product.title}
      />
    );
  });

  return <ul className='cards'>{productCardList}</ul>;
};

export default Cards;
