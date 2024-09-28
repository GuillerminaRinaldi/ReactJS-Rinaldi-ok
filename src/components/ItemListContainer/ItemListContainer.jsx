import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../../firebase/database';
import './ItemListContainer.css';  

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imagen} alt={product.nombre} />
          <h2>{product.nombre}</h2>
          <p>Autor: {product.author}</p>
          <p>Género: {product.genre}</p>
          <p>Precio: ${product.precio}</p>
          <Link to={`/product/${product.id}`} className="details-button">Ver Detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
