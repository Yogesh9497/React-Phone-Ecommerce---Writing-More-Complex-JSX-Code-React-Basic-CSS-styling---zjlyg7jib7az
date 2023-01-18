import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
import images from "../../images";
export default class Store extends Component {
  render() {
    return (
      <ProductConsumer>
        {context=>{
          return(
            <section>
              {context.cart.length===0?
              <EmptyCart />
              :
              <div className="container p-5">
              <h1><strong>Your Cart</strong></h1>
              <table className="table">
                <thead>
                <tr>
                  <th>Products</th>
                  <th>Name of Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                  <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {context.cart.map((data,idx)=>{
                  return(
                    <tr key={idx}>
                      <td>
                        <img src={images[data.img]} alt="Product image" className="img-fluid" width='150px' height='150px' />
                      </td>
                      <td>{data.title}</td>
                      <td>${data.price}</td>
                      <td>
                        <button className='quantity-control btn btn-sm btn-outline-dark rounded-0' onClick={()=>context.decrement(data.id)}>-</button>
                        <button className="quantity-control btn btn-sm btn-outline-dark rounded-0" disabled>{data.count}</button>
                        <button className='quantity-control btn btn-sm btn-outline-dark rounded-0' onClick={()=>context.increment(data.id)} >+</button>
                      </td>
                      <td>
                        <button className="remove btn btn-transparent" onClick={()=>context.removeItem(data.id)}><i className="fas fa-trash text-warning"></i></button>
                      </td>
                      <td>
                        Item Total: {data.total}
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
              <button className="btn btn-outline-danger btn-sm" onClick={context.clearCart}>CLEAR CART</button><br/>
              <h4>SUBTOTAL : $  {context.cartSubTotal}</h4>
              <h4>TAX : $  {context.cartTax}</h4>
              <h4>TOTAL : $  {context.cartTotal}</h4>
              </div> 
              }
              
            </section>
          )
        }}
      </ProductConsumer>
    );
  }
}
