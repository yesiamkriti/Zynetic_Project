import Footer from './components/footer'
import { Navbar, Nav, Container,Button,Badge } from 'react-bootstrap'
import BootstrapCarousel from './components/slider'
import { Outlet, Link } from 'react-router-dom'
import { useEffect,useContext} from 'react'
import {Store} from './Store'

function App() {
  const{state:{mode, cart},dispatch} = useContext(Store)
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <header>
          <Navbar>
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
                  <Button variant={mode} onClick={switchModeHandler}>
                  <i
                    className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}
                  ></i>
                </Button> 
                   <Link to="/cart" className="nav-link">
               Cart
               {cart.cartItems.length > 0 && (
                 <Badge pill bg="danger">
                   {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                 </Badge>
               )}
             </Link>
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
