import React from 'react'
import {Link} from 'react-router-dom'

function MovieCard({movie}) {

 return (

      movie.map(el=>
           <div className='col-md-4 col-sm-6' key={el.id}>
                 <div className='card'>
                    <div className='card-header'>
                        <a><img src={el.img} style={{maxWidth:'100%'}} /></a> 
                          </div>
                            <div className='card-body'>
                                 <h6>{el.title}</h6> 
                                    <h6>{el.postURL}</h6> 
                                    <Link to={`/film/${el.title}`}>show</Link>
                                         </div>
                                            </div>
                                                </div>
                                                    ))}

export default MovieCard