import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const Private = () => {
  const getToken = localStorage.getItem("setToken")

  return getToken ? <Outlet/> :  Navigate("/login")
};

export default Private;
