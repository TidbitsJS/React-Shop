import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { data } from "./Data";

export class CardItem extends Component {
  render() {
    return (
      <Row className="store-items" id="store-items">
        {data.map((card, index) => (
          <Col
            xs={10}
            sm={6}
            lg={4}
            className="mx-auto store-item my-3"
            data-item={card.category}
            key={index + card.name}
          >
            <Card>
              <div className="img-container">
                <Card.Img varaint="top" src={card.url} className="store-img" />
                <span className="store-item-icon">
                  <i className="fas fa-shopping-cart"></i>
                </span>
              </div>
              <Card.Body>
                <Card.Text className="d-flex justify-content-between text-capitalize">
                  <h5 id="store-item-name">{card.name}</h5>
                  <h5 id="store-item-value">
                    ${" "}
                    <strong id="store-item-price" className="font-weight-bold">
                      {card.price}
                    </strong>
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default CardItem;
