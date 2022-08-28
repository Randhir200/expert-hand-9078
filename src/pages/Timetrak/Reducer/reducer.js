import { GETTASK } from "./actiontype"

const intialdata ={
   data:[]
}

export const Taskreducer =(state=intialdata,{type,payload})=>{
  switch (type) {
    case GETTASK:{
        
        return {...state,data:payload}
    } 
        
      
  
    default:return state
  }
}