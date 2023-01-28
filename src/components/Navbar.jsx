import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { logout } from "../redux/auth/AuthAction";
import { ToastContainer, toast } from "react-toastify";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { CartReducer } = useSelector((store) => store);

  const [user, setUser] = useState("");

  const { AuthReducer } = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      }
    });
  }, []);

  setTimeout(() => {
    setOpen(false);
  }, 5000);

  const NavPaths = () => {
    return (
      <ul className="navbar-nav mx-auto mb-lg-0 text-white">
        <li className="nav-item bg-success p-2 text-center">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item bg-success p-2 text-center">
          <NavLink
            className="nav-link active"
            aria-current="page"
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li className="nav-item bg-success p-2 text-center">
          <NavLink
            className="nav-link active"
            aria-current="page"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    );
  };

  const notifySuccess = () => toast.success("Sign Out Successful");
  const notifyError = () => toast.error("Something went wrong");

  const handleSignOut = (auth) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
        notifySuccess();
      })
      .catch((error) => {
        // An error happened.
        notifyError();
      });
  };

  const NavAuthPaths = (
    <div className="buttons">
      {AuthReducer ? (
        <button
          onClick={() => handleSignOut(auth)}
          className="btn btn-outline-dark"
        >
          {" "}
          <i className="fa fa-sign-out me-1" />
          Sign Out
        </button>
      ) : (
        <NavLink to="/login" className="btn btn-outline-dark">
          {" "}
          <i className="fa fa-sign-in me-1" />
          Login
        </NavLink>
      )}
      {AuthReducer ? (
        <button className="btn btn-outline-dark ms-2">
          {" "}
          <i className="fa fa-user me-1" />
          {user}
        </button>
      ) : (
        <NavLink to="/register" className="btn btn-outline-dark ms-2">
          {" "}
          <i className="fa fa-user-plus me-1" />
          Register
        </NavLink>
      )}
      <NavLink to="/cart" className="btn btn-outline-dark ms-2">
        {" "}
        <i className="fa fa-shopping-cart me-1" />
        Cart {CartReducer.length}
      </NavLink>
    </div>
  );
  return (
    <div>
      <nav className="navbar  navbar-expand-lg  bg-light py-2 shadow-sm ">
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
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Shopping App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 text-white">
              <li className="nav-item p-2 text-center">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-2 text-center">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item p-2 text-center">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {NavAuthPaths}
          </div>
        </div>
      </nav>
      {open && (
        <div onClick={() => setOpen(!open)}>
          <NavPaths />
        </div>
      )}
    </div>
  );
};

export default Navbar;
