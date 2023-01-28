import { signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { Link,  useNavigate } from "react-router-dom";
import { login } from "../redux/auth/AuthAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [formData,setFormData]=useState({email:"",password:""});

  const {email,password}=formData;

  const [btnDis,setBtnDis]=useState(false)

  const [err,setErr]=useState("")

  const navigate=useNavigate()

  const dispatch=useDispatch()

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value});
  }

  const handleSubmit=()=>{
    setBtnDis(true)
    signInWithEmailAndPassword(auth,formData.email,formData.password)
    .then(async(res)=>{
      setBtnDis(false);
      dispatch(login())
      navigate('/')
    }).catch((err)=>{
      setBtnDis(false);
      setErr(err.message)
    })
  }

  return (
    <>
    <section className='container'>
        <div className=''>
          <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-google" />
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter" />
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="formControlLg">Email address</label>
                  <input value={email} name="email" onChange={(e)=>handleChange(e)} type="email" id="formControlLg" className="border form-control p-1" />
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="formControlLg">Password</label>
                  <input value={password} name="password" onChange={(e)=>handleChange(e)} type="password" id="formControlLg" className="border form-control p-1"/>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <p className="mt-3">{err!==""?<><button onClick={()=>window.location.reload()} className="btn fw-bold btn-outline-danger text-danger"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> <span>{err}</span></button></>:err}</p>
                <div className="text-center text-lg-start mt-2 pt-2">
                  <button type="button" onClick={()=>handleSubmit()} disabled={btnDis} className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                  <p className="small fw-bold mt-1 pt-1 mb-0">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
                </div>
              </form>
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
    </>
  )
}

export default Login