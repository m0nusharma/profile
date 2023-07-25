import React from 'react'
import './DotedCard.css'

const DotedCard = ({head, title, time}) => {
  return (
    <div className='Dootedborder w-100 p-3 mt-3 rounded-2'>
        <p className='text-secondary m-0'>{head}</p>
        <div className='d-flex justify-content-between w-100'>
        <h6 className='m-0'> {title}</h6>
        <div className='d-flex gap-2 align-items-center'>
        <i className="fa-regular fa-clock m-0 fs-6"></i>
        <p className=' m-0'>{time} </p>
        </div>
        </div>
    </div>
  )
}

export default DotedCard