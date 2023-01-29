import { ADD_ITEM,DEL_ITEM } from './cartActionTypes'

const cart=[]
const CartReducer = (state=cart,{type,payload}) => {
    const product=payload
    const exist=state.find((ele)=>ele.id===product.id);
  switch(type){
    case ADD_ITEM:{
        if(exist){
            return state.map((ele)=>ele.id===product.id ? {...ele,qty:ele.qty+1}:ele)
        }else{
            return (
                [...state,{...product,qty:1}]
            )
        }
    }
    case DEL_ITEM:{
        if(exist.qty===1){
            return state.filter((ele)=>ele.id!==product.id)
        }
        if(exist){
            return state.map((ele)=>ele.id===product.id ? {...ele,qty:ele.qty-1}:ele)
        }
    }
    // case REM_ITEM:{
    //     if(exist){
    //         return state.filter((ele)=>ele.id!==product.id)
    //     }
    // }
    default:
        return state
  }
}

export default CartReducer