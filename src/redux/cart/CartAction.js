import { ADD_ITEM, DEL_ITEM, } from "./cartActionTypes";

export const addCart=(product)=>({type:ADD_ITEM,payload:product})
export const delCart=(product)=>({type:DEL_ITEM,payload:product})
// export const remCart=(product)=>({type:REM_ITEM,payload:product})