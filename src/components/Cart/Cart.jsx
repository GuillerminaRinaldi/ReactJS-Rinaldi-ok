const Cart = ({ cartItems }) => {
const totalPrice = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.nombre}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio total: ${item.precio * item.quantity}</p>
              </li>
            ))}
          </ul>

          <div className="total-container">
            <button className="total-button">
              Total: ${totalPrice.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
