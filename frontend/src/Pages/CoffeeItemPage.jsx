import { Container, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import About from '../Components/About';
import Footer from '../Components/Footer';
import mainCardBg from '../images/mainCardBg.png';


const Text = () => (
  <>
    <p><strong>Country</strong>: Brasil</p>
    <p><strong>Description</strong>: Lorem ipsum dolor sit amet, consectetur<br /> 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore<br /> 
    et dolore magna aliqua. Ut enim ad minim veniam, quis<br /> 
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br /> 
    commodo consequat.<br />
    </p>
    <p><strong>Price: <span className='cash'>16.99$</span></strong></p>
  </>
)

const CoffeeItemPage = () => {
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
      <About img={require('../images/cardImg1.jpg')} head='Aboute it' text={<Text />} />
      <Footer />
    </Container>
  )
}

export default CoffeeItemPage;
