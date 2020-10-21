import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export class CardItem extends Component {
  render() {
    const card = this.props.data;
    return (
      <Col
        xs={10}
        sm={6}
        lg={4}
        className="mx-auto store-item my-3"
        data-item={card.category}
      >
        <Card className="single-item">
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
    );
  }
}

export default CardItem;
