
import axios from "axios"
import { LOGINFAILURE, LOGINLOADING, LOGINSUCESS, SIGNUPFAILURE, SIGNUPLOADING, SIGNUPSUCESS } from "../actiontype"



const getdata=()=>async(dispatch)=>{
    dispatch({type:LOGINLOADING})
    try{ 
       const res= await axios.get("https://myownapitodo.herokuapp.com/User")
       dispatch({type:LOGINSUCESS,payload:res.data})
    }catch(e){
          dispatch({type:LOGINFAILURE})
    }
   
    

}

const postApi = (data)=> async(dispatch)=>{
    const res=  await axios.post("https://myownapitodo.herokuapp.com/User",data).then(()=>{
       dispatch(getdata())
    })
}








export {postApi,getdata}