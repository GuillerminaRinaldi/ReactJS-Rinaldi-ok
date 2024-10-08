import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../firebase/database';
import { useCart } from '../../context/CartContext';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addItemToCart } = useCart(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showItemCount, setShowItemCount] = useState(true); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error al obtener el producto", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      addItemToCart(product, quantity);
      setShowItemCount(false); 
    }
  };

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div className="product-detail">
      <div className="back-home">
        <Link to="/">🏠 Volver al Home</Link>
      </div>

      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>Autor: {product.author}</p>
      <p>Género: {product.genre}</p>
      <p>Precio: ${product.precio}</p>

      {showItemCount ? (
        <div className="quantity-control">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
