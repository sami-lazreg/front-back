import React from 'react'

export default function oneProduct({state}) {
    return (
        <div>
            <img src={state.url}/>
            <p>{state.name}</p>
            <p>{state.category}</p>

        </div>
    )
}
