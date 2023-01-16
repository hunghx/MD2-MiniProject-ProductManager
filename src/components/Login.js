import React from 'react';
import { Navigate } from 'react-router-dom';
import Checkout from './Checkout';

export default function Login() {
    const isLogin = true;
    return isLogin ? <Navigate to={'/checkout'} /> : <Navigate to={'/'} />
}
