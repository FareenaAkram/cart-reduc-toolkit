import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const hasItems = cartItems.length > 0;

  return (
    <Card className={classes.cart}>
      <div className={classes['cart-header']}>
        <span className={classes['cart-icon']}>🛒</span>
        <h2>Your Shopping Cart</h2>
        {hasItems && (
          <span className={classes['item-count']}>
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {!hasItems && (
        <div className={classes.empty}>
          <span className={classes['empty-icon']}>🛒</span>
          <p>Your cart is empty</p>
          <p>Add some items to get started!</p>
        </div>
      )}

      {hasItems && (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  name: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))}
          </ul>
          <div className={classes['cart-footer']}>
            <span className={classes['total-label']}>Total Amount</span>
            <span className={classes['total-amount']}>${totalAmount.toFixed(2)}</span>
          </div>
        </>
      )}
    </Card>
  );
};

export default Cart;
