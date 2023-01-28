import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/cart/cartAction";
import { Link } from "react-router-dom";
const Cart = () => {
  const { CartReducer } = useSelector((store) => store);
  const dispatch = useDispatch();

  if (CartReducer.length === 0) {
    return (
      <div className="vh-100 container d-flex flex-column justify-content-center align-items-center">
        <h1>Your Cart is Empty</h1>
        <Link to={"/products"}>
          <button className="btn btn-outline-success me-4">
            <i class="fa fa-search" aria-hidden="true"></i> Browse Products
          </button>
        </Link>
      </div>
    );
  }

  const total = CartReducer.map((ele) => ele.qty * ele.price).reduce(
    (acc, i) => acc + i,
    0
  );

  return (
    <div className="container">
      {CartReducer.map((ele) => (
        <div key={ele.id} className="row m-5 border p-3">
          <div className="col-md-4">
            <img src={ele.image} alt="" width={"180px"} height="200px" />
          </div>
          <div className="col-md-5">
            <h3>{ele.title}</h3>
            <p className="lead fw-bold">
              {ele.qty} X {Math.ceil(ele.price) * 70} = ₹
              {ele.qty * (Math.ceil(ele.price) * 70)}
            </p>
            <button
              onClick={() => dispatch(delCart(ele))}
              className="btn btn-outline-dark me-4"
            >
              <i className="fa fa-minus" />
            </button>
            <button
              onClick={() => dispatch(addCart(ele))}
              className="btn btn-outline-dark me-4"
            >
              <i className="fa fa-plus" />
            </button>
            {/* <button onClick={()=>{}} className="btn btn-outline-danger"><i className="fa fa-trash" aria-hidden="true"></i> Remove</button> */}
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-around mb-5">
        <h3>Total amount to be paid : ₹{Math.ceil(total) * 70}</h3>
        <h3></h3>
        <Link to={"/checkout"}>
          <button className="btn btn-outline-success me-4">
            <i className="fa fa-credit-card-alt" aria-hidden="true"></i> Proceed
            To Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
