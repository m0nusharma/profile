import React from 'react'
import './Card.css'

const Card = ({title, caption, BoxIcon}) => {
  return (
    <div className=' d-flex gap-3  p-4 bg-light rounded-2 '>
    <div className='BoxIcon d-flex align-items-center justify-content-center'> 
    <i className={`${BoxIcon}`}></i>
    </div>
    <div className=''>
    <h3 className='m-0'>{title}</h3>
    <p>{caption}</p>
    </div>
    </div>
  )
}

export default Card