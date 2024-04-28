import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CardBootstrap = ({ img, title, price }) => {
  return (
    <Link to='/coffeeItem' className='link-style'>
      <div className='card-container'>
        <Card className='my-card'>
          <Card.Img variant="top" src={img} className='img-card mx-auto' />
          <Card.Body>
            <Card.Title className='font-size-14'>{title}</Card.Title>
            <Card.Text className='font-size-14 text-end'>{price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  )
}

export default CardBootstrap;
