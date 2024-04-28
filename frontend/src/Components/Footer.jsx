import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { ReactComponent as BeansLogoBlack } from '../images/BeansLogoBlack.svg';
import coffeeBeansBlack from '../images/coffeeBeansBlack.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Navbar data-bs-theme="dark" className="p-0">
            <Container className="p-0 m-0">
              <Row className="m-0">
                <Col xs={1} className="footer-nav-links p-0">
                  <Navbar.Brand href="#" className="p-0  position-relative margin-nav-link font-size-12" style={{ color: "black" }}>
                    <img src={coffeeBeansBlack} alt='coffee beans' className='position-absolute nav-img-position' />
                    <Link to='/' className='link-style hover-gold'>Coffee house</Link>
                  </Navbar.Brand>
                  <Navbar.Brand href="#" className="p-0 margin-nav-link font-size-12" style={{ color: "black" }}>
                    <Link to='/coffee' className='link-style hover-gold'>Our coffee</Link>
                  </Navbar.Brand>
                  <Navbar.Brand href="#" className="p-0 font-size-12" style={{ color: "black" }}>For your pleasure</Navbar.Brand>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <BeansLogoBlack className='footer-logo-margin' />
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;