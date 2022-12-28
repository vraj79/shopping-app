import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const {AuthReducer}=useSelector((store)=>store);

  if(!AuthReducer){
    return <Navigate to='/login' />
  }

  return children

};

export default PrivateRoute;
