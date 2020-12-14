import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';

function Refregirateur() {

const state=useSelector(state=>state.getReducer)



let electro= state.filter(el=>(el.category== "électroménager")&&(el.name.includes('Réfrigérateur')))
    return (
        <ul className=' product ' >
            {electro.map((el)=><OneProduct state={el}/>)}
        </ul>
    )
}

export default Refregirateur
