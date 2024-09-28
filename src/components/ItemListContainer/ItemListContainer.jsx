import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../../firebase/database';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { category, value } = useParams();  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);

        if (category === 'author') {
          setFilteredProducts(productList.filter(product => product.author === value));
        } else if (category === 'genre') {
          setFilteredProducts(productList.filter(product => product.genre === value));
        } else {
          setFilteredProducts(productList);  
        }
      } catch (error) {
        console.error("Error al obtener los productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, value]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
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
