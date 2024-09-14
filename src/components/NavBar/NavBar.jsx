import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
       <div>🤍</div> 
        <li><Link to="/">Todos los productos</Link></li>
        <li><Link to="/category/1">Categoria 1</Link></li>
        <li><Link to="/category/2">Categoria 2</Link></li>
      </ul>
      <div className="cart-widget">
      🛒 3
      </div>
    </nav>
  );
};

export default NavBar;

