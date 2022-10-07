import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
const PrivateRout = ({ children }) => {
  const { isAuth } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const { pathName } = useLocation();
  if (isAuth) {
    return children;
  }
  return <Navigate to='/login' state={{ from: pathName }} replace></Navigate>;
};

export default PrivateRout;
