import React from 'react';
import { Navigate } from 'react-router-dom';

const IsAuthenticated = ({ children, role }) => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData?.data.token && storedData.role) {
      // console.log('hi');
      // return <Navigate to={`/${storedData.role}Login/Dashboard`} replace />;
      window.location.assign(`${storedData?.role}Login/Dashboard`)
  }
    return children;
};

export default IsAuthenticated;