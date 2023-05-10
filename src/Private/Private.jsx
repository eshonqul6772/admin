import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Private = () => {

    const token =  JSON.parse(localStorage.getItem("token"))


   if (token){
       const element = <>{token ? <Outlet /> : <Navigate to='/login' />}</>;
       return element;
   }
};

export default Private;
