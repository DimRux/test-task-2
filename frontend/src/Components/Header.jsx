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
                Coffee house
              </Navbar.Brand>
              <Navbar.Brand href="#" className="p-0 font-size-12">Our coffee</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;