import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';

const Mixeur = () => {
    const state=useSelector(state=>state.getReducer)
    return (
        <div>
            <ul className=' product ' >
            {state
            .filter(el=>(el.category== "électroménager")&&(el.name.includes('mixeur')))
            .map((el)=><OneProduct state={el}/>)}
           </ul>
            
        </div>
    )
}

export default Mixeur
