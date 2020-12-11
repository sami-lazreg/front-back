import {useDispatch,useSelector} from 'react-redux'
import {getAction} from "../actions/getAction"
import {useEffect} from 'react'
import OneProduct from './oneProduct';


function Pc() {
    const dispatch=useDispatch();
const state=useSelector(state=>state.getReducer)

useEffect(()=>{
     dispatch(getAction())
},[]);

let pc= state.filter(el=>el.category== "pc")
    return (
        <div>
            <div>{pc.map((el)=><div><OneProduct state={el}/></div>)}</div>
        </div>
    )
}

export default Pc