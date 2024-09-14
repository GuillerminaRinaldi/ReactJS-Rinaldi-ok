import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/api';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
    <div>
      <h2>{product.title}</h2>
      <p>{product.body}</p>
    </div>
  );
};

export default ItemDetailContainer;
