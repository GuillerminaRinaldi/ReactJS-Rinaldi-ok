import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.body.slice(0, 50)}...</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default ProductCard;
