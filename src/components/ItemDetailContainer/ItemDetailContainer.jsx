import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../firebase/database';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 

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

  const handleAddToCart = () => {
  
    console.log(`Agregando ${quantity} de ${product.nombre} al carrito`);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>Autor: {product.author}</p>
      <p>Género: {product.genre}</p>
      <p>Precio: ${product.precio}</p>
      <div className="quantity-control">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
