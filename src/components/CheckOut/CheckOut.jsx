import './CheckOut.css';
import { useState } from 'react';
import { createOrder } from '../../firebase/database';  

const CheckOut = ({ cartItems, setCartItems }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: ''
  });

  const [orderId, setOrderId] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.telefono || !formData.email) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const order = {
      buyer: formData,
      items: cartItems.map(item => ({
        id: item.id,
        nombre: item.nombre,
        quantity: item.quantity,
        precio: item.precio
      })),
      total: cartItems.reduce((total, item) => total + item.precio * item.quantity, 0),
      date,
      time
    };

    try {
      const docRef = await createOrder(order);
      setOrderId(docRef.id);
      setOrderDetails(order);
      setCartItems([]);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="order-summary">
          <h3>Orden de compra generada</h3>
          <p>ID de la orden: {orderId}</p>
          <p>Fecha: {orderDetails?.date}</p>
          <p>Hora: {orderDetails?.time}</p>
          <h4>Detalles de los productos:</h4>
          <ul>
            {orderDetails?.items.map(item => (
              <li key={item.id}>
                <span>{item.nombre}</span> - Cantidad: {item.quantity} - Precio: ${item.precio}
              </li>
            ))}
          </ul>
          <p><strong>Total: ${orderDetails?.total.toFixed(2)}</strong></p>
          <h4>Datos del comprador:</h4>
          <p>Nombre: {orderDetails?.buyer.nombre}</p>
          <p>Teléfono: {orderDetails?.buyer.telefono}</p>
          <p>Email: {orderDetails?.buyer.email}</p>
        </div>
      ) : (
        <div className="checkout-container">
          {/* Respetamos la estética anterior */}
          <div className="checkout-summary">
            <h3>Resumen de tu compra</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <p>{item.nombre} - Cantidad: {item.quantity}</p>
                </li>
              ))}
            </ul>
            <p>Total: ${cartItems.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2)}</p>
          </div>

          <div className="checkout-form">
            <h3>Datos de contacto</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Finalizar Compra</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
