import React from 'react'

function PlatItem({platInfo}) {
    return (
        <article>
            <p>nom du plat:{platInfo.name}</p>
            <p>prix:{platInfo.price}</p>
            <p>description:{platInfo.description}</p>
        </article>
    )
}

export default PlatItem
