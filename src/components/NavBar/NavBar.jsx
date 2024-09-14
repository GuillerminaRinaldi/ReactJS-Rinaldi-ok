import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Todos los productos</Link></li>
        <li><Link to="/category/1">Categoria 1</Link></li>
        <li><Link to="/category/2">Categoria 2</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
