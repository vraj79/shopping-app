import React from 'react'
import { LOGIN, LOGOUT } from './AuthActionTypes'

const auth=false
export const AuthReducer = (state=auth,{type}) => {
  switch(type){
    case LOGIN:{
        return (state=true)
    }
    case LOGOUT:{
      return (state=false)
  }
    default:
        return state
  }
}

