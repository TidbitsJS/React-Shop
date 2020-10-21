import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <Row>
            <Col md={6} className="footer-title footer-shop py-5">
              <h1 className="text-capitalize text-center">
                <strong className="banner-title">Grandma's</strong>
              </h1>
              <div className="footer-icons mt-3 d-flex justify-content-around flex-wrap">
                <a href="#facebook" class="footer-icon">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#twitter" class="footer-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#instagram" class="footer-icon">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#google" class="footer-icon">
                  <i class="fab fa-google-plus"></i>
                </a>
              </div>
            </Col>
            <Col
              md={6}
              className="footer-contact text-center text-capitalize p-5"
            >
              <h3 className="mb-5">contact</h3>
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-map"></i>
                </span>
                <span>221 baker street, London</span>
              </p>
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-phone"></i>
                </span>
                <span>+91 9834905510 </span>
              </p>
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span>enolaholmes@email.com</span>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
