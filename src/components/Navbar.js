import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to={'/'} className="products-navbar navbar-brand text">Products</Link>
        <Link to={"/cart"} className="my-cart btn btn-outline-primary"><i className="fas fa-cart-plus"></i> My Cart</Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background:#00008B
`;

