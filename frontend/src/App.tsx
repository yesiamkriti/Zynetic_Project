import Footer from './components/footer'
import { Navbar, Nav, Container } from 'react-bootstrap'
import BootstrapCarousel from './components/slider'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Zynetics EV</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#products">Products</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                  <Nav.Link href="#cart">Cart</Nav.Link>
                  <Nav.Link href="#signup">SignIn/LogIn</Nav.Link>
                  <Nav.Link href="#profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <BootstrapCarousel />
        <main>
          <Container className="mt-4">
           <Outlet/>
          </Container>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
