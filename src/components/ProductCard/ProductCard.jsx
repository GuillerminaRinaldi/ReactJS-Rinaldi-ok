import { Link } from 'react-router-dom';
import './ProductCard.css';  

const ProductCard = ({ product }) => {
  const randomPrice = (Math.random() * 100 + 10).toFixed(2);  

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`https://picsum.photos/300/200?random=${product.id}`} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>Precio: ${randomPrice}</p> 
      <p>{product.body.slice(0, 50)}...</p>
      <Link to={`/product/${product.id}`} className="details-button">Ver en detalle</Link>
    </div>
  );
};

export default ProductCard;
