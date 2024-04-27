import { Button, Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import { ReactComponent as BeansLogoWhite } from '../images/BeansLogo.svg';
import { ReactComponent as BeansLogoBlack } from '../images/BeansLogoBlack.svg';
import mainHeaderLogo from '../images/mainHeaderLogo.png';
import paper from '../images/paper.png';
import mainCard1 from '../images/mainCard1.png';
import mainCard2 from '../images/mainCard2.png';
import mainCard3 from '../images/mainCard3.png';

const MainPage = () => {
  return (
    <Container fluid maxWidth='1440x' className='p-0'>
      <main className="bg-image" style={{ backgroundImage: `url(${mainHeaderLogo})`, height: '640px', color: "white"  ,'background-repeat': 'no-repeat'}}>
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
          </Row>
        </Container>
      </section>
      <section className="bg-image" style={{ backgroundImage: `url(${paper})`, height: '495px', color: "black" }}>
        <Container>
          <Row className='m-0 p-0'>
            <h3 className="text-center font-size-24 margin-section-three">Our best</h3>
          </Row>
          <Row className='m-0 p-0'>
            <CardGroup className='cards-container'>
              <div className='card-container'>
                <Card className='my-card'>
                  <Card.Img variant="top" src={mainCard1} className='img-card mx-auto'/>
                  <Card.Body>
                    <Card.Title className='font-size-14'>Solimo Coffee Beans 2 kg</Card.Title>
                    <Card.Text className='font-size-14 text-end'>
                      10.73$
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='card-container'>
                <Card className='my-card'>
                  <Card.Img variant="top" src={mainCard2} className='img-card mx-auto'/>
                  <Card.Body>
                    <Card.Title className='font-size-14'>Presto Coffee Beans 1 kg</Card.Title>
                    <Card.Text className='font-size-14 text-end'>
                      15.99$
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>


              <div className='card-container'>
                <Card className='my-card'>
                  <Card.Img variant="top" src={mainCard3} className='img-card mx-auto'/>
                  <Card.Body>
                    <Card.Title className='font-size-14'>AROMISTICO Coffee 1 kg</Card.Title>
                    <Card.Text className='font-size-14 text-end'>
                      6.99$
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

            </CardGroup>
          </Row>
        </Container>
      </section>
      <Footer />
    </Container>
  )
}

export default MainPage;
