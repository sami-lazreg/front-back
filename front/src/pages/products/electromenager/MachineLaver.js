import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';


function Machine() {

const state=useSelector(state=>state.getReducer)


let electro= state.filter(el=>(el.category== "électroménager")&&(el.name.includes('Lave')))
    return (
        <div>
             
        <ul className=' product ' >
            {electro.map((el)=><OneProduct state={el}/>)}
        </ul>
        </div>
    )
}

export default Machine
