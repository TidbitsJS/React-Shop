import React, { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./store.css";
import CardItem from "./Card";
import { data } from "./Data";

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: data,
    };
  }
  render() {
    const displayItem = (btn) => {
      console.log(btn);
      if (btn === "all") return this.setState({ items: data });
      this.setState({
        items: data.filter((item) => item.category === btn),
      });
    };

    const sortButtons = ["all", "cakes", "cupcakes", "sweets", "doughnuts"].map(
      (btn, index) => (
        <a
          href={"#" + btn}
          key={index + btn}
          className="btn btn-black text-uppercase filter-btn m-2"
          data-filter={btn}
          onClick={() => displayItem(btn)}
        >
          {btn}
        </a>
      )
    );

    return (
      <section id="store" className="store py-5">
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center">
              <h1 className="text-capitalize">
                Our <strong className="banner-title">Store</strong>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg={8}
              className="mx-auto d-flex justify-content-around sortBtn flex-wrap"
            >
              {sortButtons}
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={6} className="mx-auto">
              <InputGroup className="mt-3 mb-3">
                <InputGroup.Prepend id="basic-addon">
                  <span
                    className="input-group-text search-box"
                    id="search-icon"
                  >
                    <i className="fas fa-search"></i>
                  </span>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Item"
                  aria-label="Item"
                  aria-describedby="basic-addon"
                  id="search-item"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="store-items" id="store-items">
            {this.state.items.map((cartItem, index) => (
              <CardItem data={cartItem} key={index + cartItem.name} />
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Store;
