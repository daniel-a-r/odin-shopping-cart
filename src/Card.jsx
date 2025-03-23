import './Card.css'

const Card = ({ imageURL, price, title }) => {
  return (
    <li className="card">
      <img className="card-img" src={imageURL} alt='' />
      <p>{title}</p>
      <p>${price}</p>
      {/* <p>Hello</p> */}
    </li>
  );
};

export default Card;
