import React, { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./store.css";
import CardItem from "./Data/Card";

class Store extends Component {
  render() {
    const sortButtons = ["all", "cakes", "cupcakes", "sweets", "doughnuts"].map(
      (btn, index) => (
        <a
          href={"#" + btn}
          key={index + btn}
          className="btn btn-black text-uppercase filter-btn m-2"
          data-filter={btn}
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
          <CardItem />
        </Container>
      </section>
    );
  }
}

export default Store;
