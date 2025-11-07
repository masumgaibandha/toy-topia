import React, { use} from 'react'
import MyContainer from './MyContainer'
import { Link, NavLink } from 'react-router'
import MyLink from './MyLink'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  
  const result = use(AuthContext)
  console.log(result)

  return (
    <div  className="bg-base-100 shadow">
       
     <MyContainer>
    <div className='flex justify-between items-center p-5'>
      <div>
        <MyLink to={'/'}><h1 className='text-2xl font-bold text-[#EA4A30]'>ToyTopia</h1></MyLink>
        
      </div>
      <div className="flex gap-10 items-center text-xl font-semibold">
        <MyLink to={'/'}>Home</MyLink>
        <MyLink to={'/about'}>About</MyLink>
        <MyLink to={'/profile'}>Profile</MyLink>
        </div>
      
      {/* Button */}
      <div>
     <button className='btn bg-[#EA4A30] text-white w-30 text-xl font-semibold'>
        <Link to='/login'>Login</Link>
      </button>
     
      </div>
    </div>

    </MyContainer>
    </div>
  )
}

export default Navbar