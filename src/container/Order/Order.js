import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import birthdayCake from "../../images/trans-cake.png";
import customCake from "../../images/trans-custom.png";
import weddingCake from "../../images/trans-wedding.png";

const orderData = [
  {
    url: birthdayCake,
    name: "birthday cake",
    price: "5",
  },
  {
    url: customCake,
    name: "custom cake",
    price: "10",
  },
  {
    url: weddingCake,
    name: "wedding cake",
    price: "15",
  },
];

const displayOrder = orderData.map((order, index) => (
  <Col
    xs={11}
    md={6}
    lg={4}
    key={order.name + index}
    className="mx-auot my-4 text-center text-capitalize"
  >
    <h3 className="py-3">{order.name}</h3>
    <div className="text-muted">
      <p className="my-3"> {order.name} with a name</p>
      <p className="my-3">custom ingredients</p>
      <p className="my-3">custom size</p>
      <p className="my-3">custom design</p>
      <button type="button" className="btn btn-pink text-capitalize mb-3">
        Order now
      </button>
      <p className="text-lowercase mb-4">starting at $ {order.price}</p>
      <Image src={order.url} fluid />
    </div>
  </Col>
));

class Order extends Component {
  render() {
    return (
      <section id="order" className="cakes py-5">
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center">
              <h1 className="text-capitalize">
                Order <strong className="banner-title">cake</strong>
              </h1>
            </Col>
          </Row>
          <Row>{displayOrder}</Row>
        </Container>
      </section>
    );
  }
}

export default Order;
