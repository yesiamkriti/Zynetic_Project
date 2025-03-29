import { sampleProducts } from './data'
import { Navbar, Nav, Container } from 'react-bootstrap'
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
                  <Nav.Link href="#login">Login</Nav.Link>
                  <Nav.Link href="#signup">Sign Up</Nav.Link>
                  <Nav.Link href="#profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-4">
            <h1 className="text-center mb-4">Welcome to Zynetics EV</h1>
            <div className="row">
              {sampleProducts.map((product) => (
                <div key={product.slug} className="col-md-4 mb-4">
                  <div className="card hover-shadow card-custom">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <strong>Price: &#8377;{product.price}</strong>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Add to Cart 
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </main>
        <footer className="mt-auto bg-dark text-white">
          <div className="text-center py-3">
            <p>&copy; 2025 Zynetics EV. All rights reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#terms">Terms of Service</a>
              </li>
              <li className="list-inline-item">
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
