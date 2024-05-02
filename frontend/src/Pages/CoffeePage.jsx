import { useState, useRef, useEffect, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import uniqueId from 'lodash/uniqueId.js';
import Header from '../Components/Header';
import About from '../Components/About';
import Card from '../Components/Card';
import mainCardBg from '../images/mainCardBg.png';
import CardsContext from '../context/CardsContext';


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
  const allCards = useContext(CardsContext);
  const cards = allCards.filter((card) => card?.country);

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
    <Container fluid maxwidth='1440x' className='p-0'>
      <main className="bg-image" style={{ backgroundImage: `url(${mainCardBg})`, height: '260px' }}>
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
          <button onClick={onClickBrazil} className={myValue === 'Brazil' ? 'btn-1 act-btn' : 'btn-1'}>Brazil</button>
          <button onClick={onClickKenya} className={myValue === 'Kenya' ? 'act-btn' : null}>Kenya</button>
          <button onClick={onClickColumbia} className={myValue === 'Columbia' ? 'btn-2 act-btn' : 'btn-2'}>Columbia</button>
        </div>
      </div>
      <div className='box'>
        <div className='cards-box'>
          {cards
            .filter(({ country }) => country.toLowerCase().startsWith(myValue.toLowerCase()))
            .map(({ img, header, country, price }) => <Card img={img} header={header} country={country} price={price} key={uniqueId()} />)}
        </div>
      </div>
    </Container>
  )
}

export default CoffeePage;
