import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'; 

const Cart = () => {
  const { cartItems, clearCart } = useCart(); 

  const totalCarrito = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.nombre}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio total: ${item.precio * item.quantity}</p>
              </li>
            ))}
          </ul>
          <h3>Total del carrito: ${totalCarrito}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
          <br />
          
          <Link to="/checkout">
            <button>Finalizar compra</button> 
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
