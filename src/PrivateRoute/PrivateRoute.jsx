import React, {useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { BounceLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation();

  if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoader color="#86E7D4" />
    </div>
  );
}
  if(!user){
    return<Navigate to='/login' replace state={{from: location}}/>
  }

  return children;
}

export default PrivateRoute