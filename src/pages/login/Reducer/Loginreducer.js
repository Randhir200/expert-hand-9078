import React from 'react'
import { LOGINLOADING, LOGINSUCESS } from '../actiontype'

const intialstate2 ={
    loading:false,
    error:false,
    data:[]
  }


const loginreducer = (state=intialstate2,{type,payload}) => {
    switch (type) {
        case LOGINSUCESS:
         return {
            ...state,loading:false,error:false,data:payload
         }
        case LOGINLOADING:
          return {
            ...state,loading:true,error:false
          } 
        case LOGINSUCESS:
          return {
            ...state,loading:false,error:true
          }
    
    
        default:
         return state
      }
}















export default loginreducer