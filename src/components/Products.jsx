import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cart/cartAction";

const Products = () => {
  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const {AuthReducer}=useSelector((store)=>store)

  console.log(AuthReducer);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    const percentage=66
    return <h1>Loading....</h1>
  };

  const filterProduct = category => {
    const fil_data = data.filter(ele => ele.category === category);
    setFilter(fil_data);
  };

  const ShowProducts = () => {
    return (
      <div>
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
          {filter.map(ele => {
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
                        margin: "auto"
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
                    ₹ {Math.ceil(ele.price)*70}
                    </p>
                    <button
                      onClick={() => AuthReducer?dispatch(addCart(ele)):alert("Please Login First")}
                      className="btn btn-outline-primary my-2"
                    >
                      Add To Cart
                    </button>
                    <br />
                    <NavLink
                      to={`/products/${ele.id}`}
                      className="btn btn-outline-warning"
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
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
