import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = ({ totalItemsInCart }) => {
  return (
    <Link to="/cart">
      <div className="cart-widget">
        🛒 {totalItemsInCart > 0 ? totalItemsInCart : '--'}  
      </div>
    </Link>
  );
};

export default CartWidget;
