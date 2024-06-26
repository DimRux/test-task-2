import { useContext } from 'react';
import { Button, Container, Row, Col, CardGroup } from 'react-bootstrap';
import Header from '../Components/Header';
import CardBootstrap from '../Components/CardBootstrap';
import { ReactComponent as BeansLogoWhite } from '../images/BeansLogo.svg';
import { ReactComponent as BeansLogoBlack } from '../images/BeansLogoBlack.svg';
import mainHeaderLogo from '../images/mainHeaderLogo.png';
import paper from '../images/paper.png';
import CardsContext from '../context/CardsContext';

const Text = () => (
  <>
    <p className="text-center font-size-14 margin-section-two">
      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br />
      Afraid at highly months do things on at. Situation recommend objection do intention<br />
      so questions. As greatly removed calling pleased improve an. Last ask him cold feel<br />
      met spot shy want. Children me laughing we prospect answered followed. At it went<br />
      is song that held help face.<br />
      <br />
      Now residence dashwoods she excellent you. Shade being under his bed her, Much<br />
      read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant<br />
      horrible but confined day end marriage. Eagerness furniture set preserved far<br />
      recommend. Did even but nor are most gave hope. Secure active living depend son<br />
      repair day ladies now.</p>
  </>
)


const MainPage = () => {
  const allCards = useContext(CardsContext);
  const cards = allCards.filter((card) => !card?.country);

  return (
    <Container fluid maxwidth='1440x' className='p-0'>
      <main className="bg-image" style={{ backgroundImage: `url(${mainHeaderLogo})`, height: '640px' }}>
        <Container>
          <Row>
            <Header />
            <Row className="m-0 p-0">
              <h1 className="text-center margin-header-h1">Everything You Love About Coffee</h1>
            </Row>
            <Row className="m-0 p-0">
              <BeansLogoWhite />
            </Row>
          </Row>
          <Row className="m-0 p-0">
            <h3 className="text-center font-size-24 margin-header-one">We makes every day full of energy and taste</h3>
          </Row>
          <Row className="m-0 p-0">
            <h3 className="text-center font-size-24 margin-header-two">Want to try our beans?</h3>
          </Row>
          <Row className="m-0 p-0">
            <Col xs={12} className="text-center">
              <Button variant="outline-light" className="btn-sm main-button" size="sm">More</Button>
            </Col>
          </Row>
        </Container>
      </main>
      <section style={{ color: "black" }}>
        <Container>
          <Row className='m-0 p-0'>
            <h3 className="text-center font-size-24 margin-section-one">About Us</h3>
          </Row>
          <Row className='m-0 p-0'>
            <BeansLogoBlack />
          </Row>
          <Row className='m-0 p-0'>
            <Text />
          </Row>
        </Container>
      </section>
      <section className="bg-image" style={{ backgroundImage: `url(${paper})`, height: '495px', color: "black" }}>
        <Container>
          <Row className='m-0 p-0'>
            <h3 className="text-center font-size-24 margin-section-three">Our best</h3>
          </Row>
          <Row className='m-0 p-0 d-flex justify-content-center'>
            <CardGroup className='cards-container justify-content-center'>
              {cards.map(({ img, title, price, id }) => <CardBootstrap img={img} title={title} price={price} key={id} />)}
            </CardGroup>
          </Row>
        </Container>
      </section>
    </Container>
  )
}

export default MainPage;
