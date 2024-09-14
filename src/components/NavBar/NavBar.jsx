import { CartWidget } from '../CartWidget/CartWidget';
import "./navbar.css"

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Link1</li>
        <li>Link2</li>
      </ul>
      <CartWidget />
    </nav>
  );
};