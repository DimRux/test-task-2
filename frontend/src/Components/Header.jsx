import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col } from "react-bootstrap";
import coffeeBeans from '../images/coffeeBeans.png';

const Header = () => {
  return (
    <header>
      <Navbar data-bs-theme="dark" className="p-0">
        <Container className="p-0 m-0">
          <Row className="m-0">
            <Col xs={1} className="header-nav-links p-0">
              <Navbar.Brand href="#" className="p-0 position-relative margin-nav-link font-size-12">
                <img src={coffeeBeans} alt='coffee beans' className='position-absolute nav-img nav-img-position' />
                <Link to='/' className='link-style hover-gold'>Coffee house</Link>
              </Navbar.Brand>
              <Navbar.Brand href="#" className="p-0 font-size-12">
                <Link to='/coffee' className='link-style p-0 font-size-12 hover-gold'>Our coffee</Link>
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;