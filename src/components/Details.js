import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import images from "../images";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {context=>{
          return(
            <div className="container p-5">
              <div className="row">
              <h1 className="text-center">{context.detailProduct.title}</h1>
                <div className="col-lg-6">
                  <img src={images[context.detailProduct.img]} className='img-fluid' />
                </div>
                <div className="col-lg-6">
                  <h1>Model : {context.detailProduct.title}</h1>
                  <h6 className="text-uppercase">MADE BY : {context.detailProduct.company}</h6>
                  <h6>Price : ${context.detailProduct.price}</h6>
                  <p className="small">Some Info About Product</p>
                  <p className="text-muted">{context.detailProduct.info}</p>
                  <Link className="back-to-products btn btn-sm btn-outline-info" to={'/'}>Back to Product</Link>
                  <button className="in-add-to-cart btn btn-sm btn-outline-warning" onClick={()=>{context.addToCart(context.detailProduct.id);context.openModal(context.detailProduct.id)}}>{context.detailProduct.inCart? 'In Cart' : 'Add To Cart'}</button>
                </div>
              </div>
            </div>
          )
        }}    
      </ProductConsumer>
    );
  }
}
