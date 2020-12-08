import {REGISTER_SUCCESS,REGISTER_FAIL} from './types'
import axios from 'axios'

 export const registerUser=info=>dispatch=>{
     axios.post('/register',info)
     .then(res=>dispatch({
         type:REGISTER_SUCCESS,
         payload:res.data
     }))
     .catch(err=>dispatch({
         type:REGISTER_FAIL,
         payload:err.response.data.msg
     }))
 }