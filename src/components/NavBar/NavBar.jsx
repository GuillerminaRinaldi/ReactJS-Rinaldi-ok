import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = ({ totalItemsInCart }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo">📚</span> 
      </div>

      <ul className="nav-links">
        <li><Link to="/">Todos los productos</Link></li>

        <li className="dropdown">
          <span className="nav-item">Autor</span>
          <div className="dropdown-content">
            <Link to="/category/author/Jorge Luis Borges">Jorge Luis Borges</Link>
            <Link to="/category/author/Julio Cortázar">Julio Cortázar</Link>
            <Link to="/category/author/Laura Esquivel">Laura Esquivel</Link>
            <Link to="/category/author/Carlos Ruiz Zafón">Carlos Ruiz Zafón</Link>
            <Link to="/category/author/Gabriel García Márquez">Gabriel García Márquez</Link>
            <Link to="/category/author/Roberto Bolaño">Roberto Bolaño</Link>
          </div>
        </li>

        <li className="dropdown">
          <span className="nav-item">Género</span>
          <div className="dropdown-content">
            <Link to="/category/genre/Filosofía">Filosofía</Link>
            <Link to="/category/genre/Ficción contemporánea">Ficción contemporánea</Link>
            <Link to="/category/genre/Romance">Romance</Link>
            <Link to="/category/genre/Misterio">Misterio</Link>
            <Link to="/category/genre/Realismo mágico">Realismo mágico</Link>
          </div>
        </li>
      </ul>

      <div className="cart-widget-container">
        <CartWidget totalItemsInCart={totalItemsInCart} />
      </div>
    </nav>
  );
};

export default NavBar;
