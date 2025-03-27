import './Card.css';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlus, mdiMinus } from '@mdi/js';
import { useOutletContext } from 'react-router';

const Card = ({ dataId, imageURL, price, title }) => {
  const [totalItems, setTotalItems] = useOutletContext();
  const foundItem = totalItems.find((item) => item.id === dataId);
  const initialQuantity = foundItem ? foundItem.quantity : 0;
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundIndx = totalItems.findIndex((item) => item.id === dataId);
    if (foundIndx === -1) {
      setTotalItems(totalItems.concat({ id: dataId, quantity }));
    } else {
      setTotalItems([
        ...totalItems.slice(0, foundIndx),
        { id: dataId, quantity },
        ...totalItems.slice(foundIndx + 1),
      ]);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityInput = (event) => {
    const isWholeNumber = (value) => {
      if (
        !isNaN(Number(value)) &&
        value.at(0) !== '-' &&
        value.at(-1) !== '.'
      ) {
        return true;
      }
      return false;
    };

    if (isWholeNumber(event.target.value)) {
      setQuantity(Number(event.target.value));
    }
  };

  return (
    <li className='card'>
      <div className='product'>
        <img className='card-img' src={imageURL} alt='' />
        <div className='card-info'>
          <p>{title}</p>
          <p className='card-price'>${price}</p>
        </div>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div className='quantity-input'>
          <button type='button' onClick={handleDecrement}>
            <Icon path={mdiMinus} size={0.7} />
          </button>
          <input
            type='text'
            inputMode='numeric'
            value={quantity}
            onChange={handleQuantityInput}
          />
          <button type='button' onClick={handleIncrement}>
            <Icon path={mdiPlus} size={0.7} />
          </button>
        </div>
        <div className='cart-actions'>
          <button type='submit'>Add To Cart</button>
        </div>
      </form>
    </li>
  );
};

export default Card;
