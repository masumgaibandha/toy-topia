import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'

const Login = () => {
  const handleLogin = () => {

  }
  const handleGoogleLogin = () =>{

  }
  return (
    <div>
      <form onSubmit={handleLogin} className="container mx-auto py-5 flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-bold text-center">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email address</label>
            <input type="email" name="email" required className="input bg-base-200" placeholder="Enter your email address" />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" name="password" required className="input bg-base-200" placeholder="Enter your password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {/* {error && <p className="text-red-500">{error}</p>} */}
            <button type="submit" className="btn bg-[#EA4A30] rounded text-white mt-4">Login</button>
            
          {/* Divider */}
          <div className='flex items-center justify-center gap-2 my-2'>
            <div className='h-px w-26 bg-[#EA4A30]'></div>
            <span className='text-sm '>or</span>
            <div className='h-px w-26 bg-[#EA4A30]'></div>
          </div>

            <button onClick={handleGoogleLogin} type="submit" className="btn  mt-2">
              <FcGoogle size={24}/>
              Continue with Google</button>

            <p className="text-center pt-5 font-semibold">Don't Have An Account ? <Link to= '/register' className="text-red-600 underline">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </form>

    </div>
  )
}

export default Login
