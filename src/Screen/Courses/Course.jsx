import React from 'react'
import './Course.css'

const Course = () => {
  return (
    <div>
    <div className=' mt-4 d-flex align-items-center justify-content-between '>
    <h4  className=''>Course I'm taking</h4> 
    <a href='#' className='buttonNav text-secondary link-underline-light'>Active  <i class="fa-solid fa-caret-down"></i> </a>
    </div>
    <hr/>
    </div>
  )
}

export default Course