import { Link } from 'react-router-dom';
import './NavBar.css';
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/electronics">Electronics</Link></li>
        <li><Link to="/category/jewelery">Jewelery</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};