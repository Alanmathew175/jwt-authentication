import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Posts = () => {
  const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem('token')
      navigate('/')
    }
  return (
    <div>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  )
}

export default Posts
