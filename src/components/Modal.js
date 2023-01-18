import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
export default class Modals extends Component {
  render() {
    return (
      <ProductConsumer>
       {value =>{ 
        console.log(value.modalOpen)
       return(
        <>
          <Modal show={value.modalOpen} onHide={value.closeModal}>
            <Modal.Body>
              <h1>Item Added To Cart</h1>
              <h1>{value.modelProduct?.title}</h1>
              <h4>Price : {value.modelProduct?.price}</h4>
              <div className="input-group">
              <Link className="continue-shopping btn btn-sm btn-outline-info" to={'/'} onClick={value.closeModal} >Continue Shooping</Link>
              <Link className="go-to-cart btn btn-sm btn-outline-warning" to={'/cart'} onClick={value.closeModal} >Go To Cart</Link>
              </div>
            </Modal.Body>
          </Modal>
        </>
       )
       }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`

`;
