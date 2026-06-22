import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Wireless Headphones',
    price: 79.99,
    description: 'Premium noise-cancelling headphones with 30-hour battery life and immersive sound.',
    emoji: '🎧',
  },
  {
    id: 'p2',
    title: 'Mechanical Keyboard',
    price: 129.99,
    description: 'RGB mechanical keyboard with tactile switches for a satisfying typing experience.',
    emoji: '⌨️',
  },
  {
    id: 'p3',
    title: 'HD Webcam',
    price: 59.99,
    description: '1080p webcam with built-in microphone for crystal-clear video calls and streaming.',
    emoji: '📸',
  },
  {
    id: 'p4',
    title: 'USB-C Hub',
    price: 44.99,
    description: '7-in-1 USB-C hub with HDMI output, USB 3.0 ports, and an SD card reader.',
    emoji: '🔌',
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2 className={classes.heading}>Featured Products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            emoji={product.emoji}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
