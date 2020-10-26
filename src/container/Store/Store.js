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

  componentDidMount() {
    this.setState({
      items: data,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevProps, prevState);
    /* if (prevState.items !== this.state.items) {
      this.setState({
        items: prevState.items,
      });
    } */
  }

  render() {
    const handleChange = (e) => {
      let currentList = [];
      let newList = [];

      if (e.target.value !== "") {
        currentList = data;
        newList = currentList.filter((item) => {
          const lc = item.name.toLowerCase();
          const filter = e.target.value.toLowerCase();
          return lc.includes(filter);
        });
      } else {
        newList = data;
      }

      console.log("List", this.state.items, newList);

      this.setState({
        items: newList,
      });
    };

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
                  onChange={(e) => handleChange(e)}
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
