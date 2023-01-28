import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/AuthAction";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const [btnDis, setBtnDis] = useState(false);

  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { store } = useSelector((store) => store);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setBtnDis(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        setBtnDis(false);
        await updateProfile(res.user, {
          displayName: formData.name,
        });
        dispatch(login());
        navigate("/");
      })
      .catch((err) => {
        setBtnDis(false);
        setErr(err.message);
      });
  };

  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="">
                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                  Register Yourself
                </p>
                <div className="text-center">
                  <p className="lead fw-normal mb-0 ml-3 mb-2">
                    or Sign up with
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                </div>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="formControlLg"
                            >
                              Your Name
                            </label>
                            <input
                              name="name"
                              value={name}
                              onChange={(e) => handleChange(e)}
                              type="text"
                              id="formControlLg"
                              className="border form-control p-1"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="formControlLg"
                            >
                              Email address
                            </label>
                            <input
                              value={email}
                              name="email"
                              onChange={(e) => handleChange(e)}
                              type="email"
                              id="formControlLg"
                              className="border form-control p-1"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline mb-3">
                            <label
                              className="form-label"
                              htmlFor="formControlLg"
                            >
                              Password
                            </label>
                            <input
                              value={password}
                              name="password"
                              onChange={(e) => handleChange(e)}
                              type="password"
                              id="formControlLg"
                              className="border form-control p-1"
                            />
                          </div>
                        </div>
                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline mb-3">
                            <label
                              className="form-label"
                              htmlFor="formControlLg"
                            >
                              Repeat Your Password
                            </label>
                            <input
                              type="password"
                              id="formControlLg"
                              className="border form-control p-1"
                            />
                          </div>
                        </div> */}
                        {/* <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="femaleGender"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              defaultValue="option3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div> */}
                        <p>
                          {err !== "" ? (
                            <>
                              <button
                                onClick={() => window.location.reload()}
                                className="btn fw-bold btn-outline-danger text-danger"
                              >
                                <i
                                  className="fa fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>{err}</span>
                              </button>
                            </>
                          ) : (
                            err
                          )}
                        </p>
                        <div className="form-check d-flex justify-content-center my-1">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center">
                          <p className="small fw-bold my-2">
                            Already have an account?{" "}
                            <Link to="/login" className="link-danger">
                              Login
                            </Link>
                          </p>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            disabled={btnDis}
                            onClick={(e) => handleSubmit(e)}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col col-lg-6 col-xl-7 d-flex">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5 d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Copyright */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>
        {/* Copyright */}
        {/* Right */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        {/* Right */}
      </div>
    </div>
  );
};
