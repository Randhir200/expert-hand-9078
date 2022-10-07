import { LOGINFAILURE, LOGINLOADING, LOGINSUCESS } from '../actiontype'

const intialstate2 ={
    loading:false,
    error:false,
    data:[],
    isAuth:JSON.parse(localStorage.getItem("isAuth"))||false
  }


const loginreducer = (state=intialstate2,{type,payload}) => {
    switch (type) {
        case LOGINSUCESS:
          console.log(state.isAuth)
          localStorage.setItem("isAuth",JSON.stringify(true))
         return {
            ...state,loading:false,error:false,isAuth:true
         }
        case LOGINLOADING:
          return {
            ...state,loading:true,error:false,isAuth:false
          } 
        case LOGINFAILURE:

          return {
            ...state,loading:false,error:true,isAuth:false
          }
    
    
        default:
         return state
      }
}















export default loginreducer