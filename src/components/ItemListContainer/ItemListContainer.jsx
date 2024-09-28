import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../../firebase/database';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { category, value } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const productList = await getProducts();

        const filteredProducts = productList.filter(product => {
          if (category === 'author') {
            return product.author === value;
          } else if (category === 'genre') {
            return product.genre === value;
          }
          return true; 
        });

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [category, value]); 

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No se encontraron productos</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imagen} alt={product.nombre} />
            <h2>{product.nombre}</h2>
            <p>Autor: {product.author}</p>
            <p>Género: {product.genre}</p>
            <p>Precio: ${product.precio}</p>
            <Link to={`/product/${product.id}`} className="details-button">Ver Detalle</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
