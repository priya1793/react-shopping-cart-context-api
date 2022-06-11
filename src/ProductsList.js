import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CartContext from './CartContext';
import Navigation from './Navigation';

const ProductsList = () => {
  const { products, cartItems, addCartItem } = useContext(CartContext);
  return (
    <Container>
      <Row>
        <Navigation
          cartItemNumber={cartItems.reduce((count, currItem) => {
            return count + currItem.quantity;
          }, 0)}
        />
        <h1>Products List:</h1>
        <p>Please select a product and add to cart</p>
        {products.map((product) => (
          <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <span className="category">{product.category}</span>
                <span className="price">{product.price}$</span>
              </Card.Text>
              <Button variant="secondary" onClick={() => addCartItem(product)}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
