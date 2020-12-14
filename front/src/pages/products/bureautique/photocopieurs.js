import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';

const Photocopieurs = () => {
    const state=useSelector(state=>state.getReducer)
    return (
        <div>
            <ul className=' product ' >
            {state
            .filter(el=>(el.category== "bureautique")&&(el.name.includes('photocopieur')))
            .map((el)=><OneProduct state={el}/>)}
           </ul>
        </div>
    )
}

export default Photocopieurs
