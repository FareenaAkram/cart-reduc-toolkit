import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { title, price, description, id, emoji } = props;
  const dispatch = useDispatch();

  function addItemsToCart() {
    dispatch(cartActions.addItemToCart({ id, name: title, price }));
  }

  return (
    <li className={classes.item}>
      <Card>
        {emoji && <span className={classes.emoji}>{emoji}</span>}
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemsToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
