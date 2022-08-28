
import axios from "axios"
import { GETTASK } from "./actiontype"
export const getApi=()=>async(dispatch)=>{
       const res = await axios.get("https://myownapitodo.herokuapp.com/Doctor")
       dispatch({type:GETTASK,payload:res.data})
       return res.data
}

export const PostApi =(data)=>async(dispatch)=>{
  await axios.post("https://myownapitodo.herokuapp.com/Doctor",data).then(()=>dispatch(getApi()))
    
}

export const DeleteApi =(id)=>async(dispatch)=>{
  await axios.delete(`https://myownapitodo.herokuapp.com/Doctor/${id}`).then(()=>dispatch(getApi()))
    
}

export const ToggleApi =(id,status)=>async(dispatch)=>{
  await axios.patch(`https://myownapitodo.herokuapp.com/Doctor/${id}`,{status:!status}).then(()=>dispatch(getApi()))
    
}
