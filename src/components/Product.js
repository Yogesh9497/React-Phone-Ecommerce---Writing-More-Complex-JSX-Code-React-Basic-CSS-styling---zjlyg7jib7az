import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import images from "../images";
import Modals from "./Modals";
export default class Product extends Component {
  render() {
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <ProductConsumer >
          {context=>{
            return(
              <div className="card img-container">
                <div className="card-body">
                <Link to={'/details'} onClick={()=>context.handleDetail(this.props.data.id)} className='nav-link'>    
                  <img className="img-fluid w-100" src={images[this.props.data.img]} />
                  </Link>    
                  <button className="in-add-to-cart btn btn-sm btn-primary" onClick={()=>{context.addToCart(this.props.data.id);context.openModal(this.props.data.id)}}><i className="fas fa-cart-plus"></i></button>
                </div>
                <div className="card-footer small d-flex text-muted">
                  {this.props.data.title}
                  <span className="ms-auto">${this.props.data.price}</span> 
                </div>
              </div>
          )
          }} 
          </ProductConsumer>
        </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
 
`;
