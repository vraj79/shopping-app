import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cart/cartAction";

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

  const ShowProduct = () => {
    return (
      <div className="d-flex m-4">
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
            onClick={() => dispatch(addCart(product))}
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
            ? <h1 className="text-center mt-5">Loading...</h1>
            : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
