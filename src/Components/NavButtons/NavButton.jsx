import React from 'react'
import './NavButton.css'

const NavButton = ({title, iconn}) => {
  return (
    <div className=' d-flex gap-2 align-items-center'>
    <i className={`${iconn} icon ` } ></i>
    <a href="/about" className="buttonNav text-secondary fs-6 ">{title}</a>
    </div>
  )
}

export default NavButton