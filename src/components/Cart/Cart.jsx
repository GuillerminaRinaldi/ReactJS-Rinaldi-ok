import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems } = useCart(); 

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio total: ${item.precio * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
