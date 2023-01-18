import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="text-center p-3"> <strong>our products</strong> </h1>
          <div className="row">
            {this.state.products.map((data,idx)=>{
              return(
                <Product key={idx} data={data} />
              )
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
