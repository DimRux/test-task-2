import { useState, useRef, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import uniqueId from 'lodash/uniqueId.js';
import Header from '../Components/Header';
import About from '../Components/About';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import mainCardBg from '../images/mainCardBg.png';


const Text = () => (
  <>
    <p>
      Extremity sweetness difficult behaviour he of. On<br />
      disposal of as landlord horrible.<br />
      <br />
      Afraid at highly months do things on at. Situation<br />
      recommend objection do intention<br />
      so questions.<br />
      As greatly removed calling pleased improve an.<br />
      Last ask him cold feel<br />
      met spot shy want. Children me laughing we<br />
      prospect answered followed. At it went<br />
      is song that held help face.
    </p>
  </>
)



const CoffeePage = () => {
  const cards = [
    { img: require('../images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
    { img: require('../images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Kenya', price: '6.99$' },
    { img: require('../images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Columbia', price: '6.99$' },
    { img: require('../images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
    { img: require('../images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
    { img: require('../images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
  ]

  const [myValue, setValue] = useState('');
  const myRef = useRef();

  useEffect(() => {
    myRef.current = myValue;
  }, [myValue]);

  const onClickBrazil = () => {
    if (myRef.current === 'Brazil') {
      return setValue('');
    }
    return setValue('Brazil');
  };
  const onClickKenya = () => {
    if (myRef.current === 'Kenya') {
      return setValue('');
    }
    return setValue('Kenya');
  }
  const onClickColumbia = () => {
    if (myRef.current === 'Columbia') {
      return setValue('');
    }
    return setValue('Columbia');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container fluid maxWidth='1440x' className='p-0'>
      <main className="bg-image" style={{ backgroundImage: `url(${mainCardBg})`, height: '260px', color: "white", 'background-repeat': 'no-repeat' }}>
        <Container>
          <Row>
            <Header />
            <Row className="m-0 p-0">
              <h1 className="text-center margin-header-card">Our Coffee</h1>
            </Row>
          </Row>
        </Container>
      </main>
      <About img={require('../images/aboutOurBeans.jpg')} head='Aboute our Beans' text={<Text />} textPosition='text-center' />
      <div className='line-container'>
        <hr className='line' />
      </div>
      <div className='search-container'>
        <div className='input-container'>
          <label for="coffeename" className='label-space'>Lookiing for:</label>
          <input
            type="text"
            id="coffeename"
            name="coffeename"
            placeholder="Start typing here..."
            value={myValue}
            onChange={handleChange} />
        </div>
        <div>
          <span>Or filter</span>
          <button onClick={onClickBrazil} className='btn-1'>Brazil</button>
          <button onClick={onClickKenya}>Kenya</button>
          <button onClick={onClickColumbia} className='btn-2'>Columbia</button>
        </div>
      </div>
      <div className='box'>
        <div className='cards-box'>
          {cards
            .filter(({ country }) => country.startsWith(myValue))
            .map(({ img, header, country, price }) => <Card img={img} header={header} country={country} price={price} key={uniqueId()} />)}
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default CoffeePage;
