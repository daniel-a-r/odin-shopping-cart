import './Card.css';

const Card = ({ imageURL, price, title }) => {
  return (
    <li className='card'>
      <img className='card-img' src={imageURL} alt='' />
      <div className='card-info'>
        <p>{title}</p>
        <p className='card-price'>${price}</p>
      </div>
    </li>
  );
};

export default Card;
