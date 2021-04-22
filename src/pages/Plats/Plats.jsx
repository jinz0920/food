import React from 'react'
import PlatItem from '../PlatItem/PlatItem'

function Plats({plats}) {
    return (
        <div>
           {
                    plats.map(plat=>{
                        return <PlatItem platInfo={plat}/>
                    })
                } 
        </div>
    )
}

export default Plats
