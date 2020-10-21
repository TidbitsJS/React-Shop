import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import sweet from "../../images/sweets-3.jpeg";
import "./about.css";

class About extends Component {
  render() {
    return (
      <section className="about py-5" id="about">
        <Container>
          <Row>
            <Col xs={10} md={6} className="mx-auto my-5">
              <h1 className="text-capitalize">
                about
                <strong className="banner-title">Us</strong>
              </h1>
              <p className="my-4 text-muted w-75 about-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae eligendi officia et eum veritatis voluptatibus ipsum
                debitis explicabo laudantium voluptate rem velit iure quasi
                reprehenderit sed, id aperiam ex consequuntur?
              </p>
              <a href="#more" className="btn btn-black text-uppercase">
                more
              </a>
            </Col>
            <Col xs={10} md={6} className="mx-auto my-5 align-self-center">
              <div className="about-img_container">
                <Image src={sweet} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
