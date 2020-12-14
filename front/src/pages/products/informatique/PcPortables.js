import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';

const PcPortables = () => {
    const state=useSelector(state=>state.getReducer)
    return (
        <div>
            <ul className=' product ' >
            {state
            .filter(el=>(el.category== "informatique")&&(el.name.includes('pc portable')))
            .map((el)=><OneProduct state={el}/>)}
           </ul>
        </div>
    )
}

export default PcPortables
