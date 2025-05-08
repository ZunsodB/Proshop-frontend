import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { FaEye, FaCartPlus } from 'react-icons/fa';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{ position: 'relative', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          src={product.image} 
          variant="top" 
          style={{ 
            height: '256px', 
            width: '100%', 
            objectFit: 'cover', 
            transition: 'filter 0.3s ease-in-out' 
          }} 
          className="product-image"
        />
      </Link>
      <div 
        className="hover-overlay" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '30%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: 'none'
        }}
      >
        <ul 
          className="hover-icons" 
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            transform: 'translateY(5rem)',
            transition: 'transform 0.3s ease-in-out',
            pointerEvents: 'auto'
          }}
        >
          <li>
            <Link to={`/product/${product._id}`}>
              <FaEye 
                style={{ 
                  color: 'white', 
                  fontSize: '2rem', 
                  cursor: 'pointer' 
                }} 
              />
            </Link>
          </li>
          <li>
            <FaCartPlus 
              style={{ 
                color: 'white', 
                fontSize: '2rem', 
                cursor: 'pointer' 
              }} 
              onClick={() => {
                // Add to cart functionality can be implemented here
                console.log(`Add to cart: ${product._id}`);
              }}
            />
          </li>
        </ul>
      </div>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Inline CSS for hover effects
const styles = `
  .card:hover .product-image {
    filter: brightness(50%);
  }
  .card:hover .hover-overlay {
    opacity: 1;
  }
  .card:hover .hover-icons {
    transform: translateY(0);
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Product;