
import {getAction} from "../actions/getAction"
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import OneProduct from './oneProduct';


export default function Products() {
    
    const dispatch=useDispatch();
    const state=useSelector(state=>state.getReducer)
    
    useEffect(()=>{
         dispatch(getAction())
    },[]);
    let phone= state.filter(el=>el.category == "mobile")
    
    return (
        <div>
           
            <h1>GET ALL PRODUCTS</h1>
            
            <div>{phone.map((el)=><div><OneProduct state={el}/></div>)}</div>
 
        </div>
    )   
}
