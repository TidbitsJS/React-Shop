import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { ADD_ITEM, TOGGLE_AMOUNT } from "../../components/actions/Action";
import { Link } from "react-router-dom";

export class CardItem extends Component {
  render() {
    const addItem = (card) => {
      console.log("Item adding ... ", card.name);
      let itemFound;
      let itemCheck = this.props.cart.filter((item) => {
        if (item.cartImg === card.cartImg) {
          console.log("found");
          itemFound = item;
          return true;
        }

        return false;
      });

      console.log("itemcheck", itemCheck);

      if (itemCheck.length === 1) {
        console.log("item checked");
        this.props.dispatch({
          type: TOGGLE_AMOUNT,
          payload: { id: itemFound.id, toggle: "inc" },
        });
      } else {
        this.props.dispatch({
          type: ADD_ITEM,
          payload: {
            name: card.name,
            price: card.price,
            category: card.category,
            cartImg: card.cartImg,
            amount: card.amount,
          },
        });
      }
    };

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
              <Link to="/cart">
                <i
                  className="fas fa-shopping-cart"
                  onClick={() => addItem(card)}
                  style={{ color: "black" }}
                ></i>
              </Link>
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

const mapStateToProps = (store) => {
  const { cart, total } = store;
  return { cart, total };
};

export default connect(mapStateToProps)(CardItem);
