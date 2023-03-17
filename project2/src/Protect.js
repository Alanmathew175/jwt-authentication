import React from 'react'
import { Navigate,Outlet } from 'react-router'


const checkToken=()=>{
        const Token=localStorage.getItem('token')
        return Token
}
const Protected = () => {
   
    const isAuth=checkToken()
  return isAuth?<Outlet/>:<Navigate to='/'/>
}

export default Protected