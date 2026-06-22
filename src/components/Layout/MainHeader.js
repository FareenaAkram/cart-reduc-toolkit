import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <span className={classes['logo-icon']}>🛍️</span>
        <h1>ReduxCart</h1>
      </div>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
