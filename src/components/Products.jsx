import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cart/cartAction";
import { ToastContainer, toast } from "react-toastify";
import { Atom, CircularProgress, FourSquare } from "react-loading-indicators";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const { AuthReducer } = useSelector((store) => store);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const notifyLogin = () => toast.warn("Please Login First");

  const notifySuccess = () => toast.success("Added to Cart");

  const handleCart = (data) => {
    if (AuthReducer) {
      dispatch(addCart(data));
      notifySuccess();
    } else {
      notifyLogin();
    }
  };

  const filterProduct = (category) => {
    const fil_data = data.filter((ele) => ele.category === category);
    setFilter(fil_data);
  };

  const ShowProducts = () => {
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="buttons text-center">
          <button
            onClick={() => setFilter(data)}
            className="btn btn-outline-dark m-2"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark m-2"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark m-2"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="btn btn-outline-dark m-2"
          >
            Electronics
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="btn btn-outline-dark m-2"
          >
            Jewellery
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-center my-4">
          {filter.map((ele) => {
            return (
              <div
                key={ele.id}
                style={{ width: "270px" }}
                className="col-md-3 mx-2 my-2"
              >
                <div className="card h-100 text-center p-3">
                  <NavLink
                    to={`/products/${ele.id}`}
                    style={{ color: "black" }}
                  >
                    <img
                      style={{
                        height: "200px",
                        width: "200px",
                        display: "block",
                        margin: "auto",
                      }}
                      src={ele.image}
                      className="card-img-top"
                      alt="..."
                    />
                  </NavLink>
                  <div className="card-body">
                    <h5 className="card-title">
                      {ele.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">
                      ₹ {Math.ceil(ele.price) * 70}
                    </p>
                    <button
                      onClick={() => handleCart(ele)}
                      className="btn btn-primary my-2"
                    >
                      Add To Cart
                    </button>
                    <br />
                    <NavLink
                      to={`/products/${ele.id}`}
                      className="btn btn-warning"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-0 py-3">
        <div className="row">
          <div className="col-12 mt-1 mb-1">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="text-center">
        {loading ? (
          <div className="container mt-5 text-center d-flex align-items-center justify-content-center">
            <FourSquare color="skyblue" size="large" text="" textColor="" />
          </div>
        ) : (
          <ShowProducts />
        )}
      </div>
    </div>
  );
};

export default Products;
