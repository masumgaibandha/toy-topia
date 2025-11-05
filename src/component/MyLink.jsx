import React from 'react'
import { NavLink } from 'react-router'

const MyLink = ({to, className, children}) => {
  return (
    <NavLink to={to} className={({isActive})=> (isActive ? "text-[#EA4A30]" : `${className}` )}>
      {children}
    </NavLink>
  )
}

export default MyLink