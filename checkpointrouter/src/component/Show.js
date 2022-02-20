import React from 'react'
import {useParams} from 'react-router-dom'

function Show({movie}) {

    const { title} = useParams();

  return (
    <div>
    {title}
    
    {console.log(movie)}
    
    </div>
  )
}

export default Show