import React from 'react';
import { Redirect } from 'react-router-dom';

function withAuth(Component) {
  return function ProtectedRoute(props) {
    const token = localStorage.getItem('token');

    if (!token) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  }
}

export default withAuth;
