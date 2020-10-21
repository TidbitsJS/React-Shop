import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import headericon from "../../images/logo.svg";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <Navbar expand="lg" collapseOnSelect className="px-4">
          <Navbar.Brand href="#">
            <img src={headericon} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="myNavbar" />

          <Navbar.Collapse id="myNavbar" className="navbar-link-set">
            <Nav className="text-capitalize mx-auto">
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#services">Service</Nav.Link>
              <Nav.Link href="#cakes">order</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
            </Nav>
            <Nav className="mx-lg-2 nav-info-items d-none d-lg-flex">
              <span className="info-icon mx-lg-2">
                <i className="fas fa-phone"></i>
              </span>
              <p className="mb-0">+91 9834905510</p>
            </Nav>
            <Nav
              className="mx-lg-5 nav-info-items d-none d-lg-flex cart-info"
              id="cart-info"
            >
              <span className="cart-info_icon mr-lg-2">
                <i className="fas fa-shopping-cart"></i>
              </span>
              <p className="mb-0 text-capitalize item-count-box">
                <span id="item-count">12</span>
              </p>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid>
          <Row className="max-height justify-content-center align-items-center">
            <Col xs={10} className="mx-auto banner text-center">
              <h1 className="text-capitalize">
                Welocome to <strong className="banner-title"> Grandma's</strong>
              </h1>
              <a href="#store" className="btn banner-link text-uppercase my-2">
                explore
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
