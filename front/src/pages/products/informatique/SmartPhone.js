

import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';


export default function () {
    
    
    const state=useSelector(state=>state.getReducer)
    
    
    
    
    return (
        <div>
           <ul className=' product ' >
            {state
            .filter(el=>(el.category== "informatique")&&(el.name.includes('smartphone')))
            .map((el)=><OneProduct state={el}/>)}
           </ul>
 
        </div>
    )   
}
