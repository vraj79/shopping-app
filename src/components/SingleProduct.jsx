import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cart/cartAction";
import { FourSquare } from "react-loading-indicators";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [laoding, setLoading] = useState(false);

  const store = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    };
    getProduct();
  }, []);

  const notifySuccess = () => toast.success("Added to Cart");

  const handleCart=(data)=>{
    dispatch(addCart(data));
    notifySuccess();
  }

  const ShowProduct = () => {
    return (
      <div className="d-flex flex-wrap m-4">
        <div className="col-md-6">
          <img width={"90%"} height={"460px"} src={product.image} alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className="display-5">
            {product.title}
          </h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star" />{" "}
          </p>
          <h3 className="display-6 fw-bold my-4">
          ₹ {Math.ceil(product.price)*70}
          </h3>
          <p className="lead">
            {product.description}
          </p>
          <button
            onClick={() => handleCart(product)}
            className="btn btn-outline-dark"
          >
            Add To Cart
          </button>
          <NavLink to="/cart" className="btn btn-outline-warning ms-2 px-3">
            Go To Cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {laoding
            ? <div className="container mt-5 text-center d-flex align-items-center justify-content-center">
            <FourSquare color="skyblue" size="large" text="" textColor="" />
          </div>
            : <ShowProduct />}
        </div>
      </div>
      <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
    </div>
  );
};

export default SingleProduct;
