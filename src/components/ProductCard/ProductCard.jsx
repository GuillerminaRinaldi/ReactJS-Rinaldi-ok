import { Link } from 'react-router-dom';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`https://via.placeholder.com/300?text=Product+${product.id}`} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.body.slice(0, 50)}...</p>
      <Link to={`/product/${product.id}`} className="details-button">View Details</Link>
    </div>
  );
};

export default ProductCard;

