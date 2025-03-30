import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h1 className="text-successcext-primary fw-bold">zynetics</h1>
            <p className="mb-1">📞 +971-558962369 / +91-8790174396</p>
            <p className="mb-1">✉️ hello@zynetic.com</p>
            <p className="mb-1">
              India - PT: 108, Gachibowli, S Lingampally, Telangana, 500032
            </p>
            <p>
              Dubai - AL Khabeesi Building, Plot 128-246, Office No. G-01-572,
              Dubai, UAE
            </p>
          </Col>

          <Col md={4}>
            <Row>
              <Col>
                <h6 className="fw-bold">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-dark text-decoration-none">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark text-decoration-none">
                      Our Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark text-decoration-none">
                      Contact
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h6 className="fw-bold">Partnership</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-dark text-decoration-none">
                      Dubai Partnership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark text-decoration-none">
                      Indian Partnership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark text-decoration-none">
                      Location Partnership
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Payment Terms
                </a>
              </li>
            </ul>

            <h6 className="fw-bold mt-3">Download the App</h6>
            <div className="d-flex gap-2">
              <h1>
                <b>App Store</b>
              </h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="img-fluid"
                width="120"
              />
            </div>
          </Col>
        </Row>
        <hr></hr>
        <div className="text-center mt-4">
          <a href="#" className="text-dark mx-2">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-dark mx-2">
            <FaXTwitter size={20} />
          </a>
          <a href="#" className="text-dark mx-2">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        <div className="text-center text-muted mt-3">
          &copy; 2025 - Zynetics EV
        </div>
      </Container>
    </footer>
  )
}

export default Footer
