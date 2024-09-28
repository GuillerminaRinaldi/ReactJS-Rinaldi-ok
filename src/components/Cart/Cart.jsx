import { Link } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <h3>{item.nombre}</h3>
                <p>Cantidad:</p>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <p>Precio total: ${item.precio * item.quantity}</p>

                <button onClick={() => removeItem(item.id)} className="remove-item">
                  🗑️
                </button>
              </li>
            ))}
          </ul>

          <div className="total-container">
            <button className="total-button">
              Total: ${totalPrice.toFixed(2)}
            </button>
          </div>

          <div className="checkout-container">
            <Link to="/checkout">
              <button className="checkout-button">Check Out</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
