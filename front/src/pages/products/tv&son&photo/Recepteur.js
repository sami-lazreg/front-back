import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';

const Recepteur = () => {
    const state=useSelector(state=>state.getReducer)
    return (
        <div>
            <ul className=' product ' >
            {state
            .filter(el=>(el.category== "itv et son et photo")&&(el.name.includes('recepteur')))
            .map((el)=><OneProduct state={el}/>)}
           </ul>
        </div>
    )
}

export default Recepteur
