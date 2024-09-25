import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div>🤍</div> 
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
        
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
      <div className="cart-widget">
        🛒 3
      </div>
    </nav>
  );
};

export default NavBar;
