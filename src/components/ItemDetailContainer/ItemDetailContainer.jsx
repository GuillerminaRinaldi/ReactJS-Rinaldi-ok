import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/api';
import './ItemDetailContainer.css';  

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const randomPrice = (Math.random() * 100 + 10).toFixed(2);  

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando detalle de los productos...</p>;
  }

  return (
    <div className="product-detail">
      <div className="detail-image">
        <img src={`https://picsum.photos/600/400?random=${product.id}`} alt={product.title} />
      </div>
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="detail-price">Precio: ${randomPrice}</p>
        <p>{product.body}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
