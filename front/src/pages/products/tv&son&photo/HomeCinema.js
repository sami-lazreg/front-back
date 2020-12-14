import {useSelector} from 'react-redux'

import OneProduct from '../../oneProduct';

const HomeCinema = () => {
    const state=useSelector(state=>state.getReducer)
    return (
        <div>
            <ul className=' product ' >
            {state
            .filter(el=>(el.category== "tv et son et photo")&&(el.name.includes('home cinema')))
            .map((el)=><OneProduct state={el}/>)}
           </ul>
        </div>
    )
}

export default HomeCinema
