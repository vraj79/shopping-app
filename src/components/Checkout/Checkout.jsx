import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./checkout.css";
import { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { useEffect } from "react";
import CreditCard from "./Card/CreditCard";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "react-loading-indicators";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setName(user.displayName);
        setEmail(user.email);
      }
    });
  }, []);

  const navigate = useNavigate();

  const notifySuccess = () => toast.success("Order Confirmed");
  if (step === 3) {
    setTimeout(() => {
      notifySuccess();
    }, 1000);
    setTimeout(() => {
      navigate("/");
      window.location.reload()
    }, 2000);
  }

  return (
    <div className="m-5 border">
      <ProgressBar
        percent={((step - 1) * 100) / 2}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>
      {step === 1 && (
        <>
          <h4 className="text-center m-5 mb-3">Shipping Details</h4>
          <div className="d-grid justify-content-center align-items-center">
            <form style={{ border: "1px solid green" }} className="" action="">
              <input
                type="text"
                className="m-2"
                placeholder="Your Name"
                value={name}
                required={true}
              />
              <br />
              <input
                type="text"
                className="m-2"
                placeholder="Your Email"
                value={email}
                required
              />
              <br />
              <input
                type={"text"}
                className="m-2"
                placeholder="Shipping Address"
                required
              />
              <br />
              <input
                type="text"
                className="m-2"
                placeholder="Mobile Number"
                required
              />
              <br />
            </form>
          </div>
        </>
      )}
      {step === 2 && (
        <div>
          <CreditCard />
        </div>
      )}
      {step === 3 && (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <CircularProgress size="large" color={"green"} />
        </div>
      )}
      <div className="d-flex  justify-content-around m-5 align-items-center">
        <button
          className="bg-success text-white rounded"
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
        >
          PREV
        </button>
        <button
          className="bg-success text-white rounded"
          disabled={step === 3}
          onClick={() => setStep(step + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Checkout;
