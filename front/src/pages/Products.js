
import {getAction} from "../actions/getAction"
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import oneProduct from './oneProduct';

export default function Products() {
    const dispatch=useDispatch();
    const state=useSelector(state=>state.getReducer)
    useEffect(()=>{
         dispatch(getAction())
    }
    )
    return (
        <div>
            <h1>GET ALL PRODUCTS</h1>
            <div>{
            state.map((el)=><oneProduct state={el}/>)}
           </div>
        </div>
    )   
}
