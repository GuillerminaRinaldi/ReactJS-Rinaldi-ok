import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../api/api';
import ProductCard from '../ProductCard/ProductCard';
import './ItemListContainer.css'; 

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = category ? await getProductsByCategory(category) : await getProducts();
      setProducts(products);
    };
    fetchData();
  }, [category]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
