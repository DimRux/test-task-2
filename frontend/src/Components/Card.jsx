import { Link } from 'react-router-dom';

const Card = ({ img, header, country, price }) => {
  return (
    <Link to='/coffeeItem' className='link-style'>
      <div className="card-box">
        <div className="img-box">
          <img src={img} alt='coffee card' />
        </div>
        <h4>{header}</h4>
        <p>{country}</p>
        <p><strong>{price}</strong></p>
      </div>
    </Link>
  )
}

export default Card;