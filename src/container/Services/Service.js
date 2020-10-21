import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bread from "../../images/bread-icon.png";
import cupcake from "../../images/cupcake-icon.png";
import candy from "../../images/candy-icon.png";
import "./service.css";

const serviceData = [
  {
    url: bread,
    name: "Bread",
  },
  {
    url: cupcake,
    name: "Cupcake",
  },
  {
    url: candy,
    name: "Candy",
  },
];

class Service extends Component {
  render() {
    const displayService = serviceData.map((service, index) => (
      <Col md={4} className="text-center  my-3">
        <img src={service.url} alt={service.name + "Icon"} />
        <h6 className="text-uppercase my-3 service-title">{service.name}</h6>
        <p class="w-75 mx-auto text-left service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          recusandae fugit temporibus omnis quod aliquam iure voluptatem labore
          id. Magni placeat dicta aliquid commodi dolorum laborum tempore quae
          consequuntur ea!
        </p>
      </Col>
    ));

    return (
      <section id="services" className="services py-5">
        <Container>
          <Row>{displayService}</Row>
        </Container>
      </section>
    );
  }
}

export default Service;
