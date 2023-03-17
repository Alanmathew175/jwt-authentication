import React, { useState } from 'react'
import {Box,Button,Container,Stack,TextField,Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from '../axios'
const Register = () => {
   
 const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirm_password,setConfirmPassword]=useState('')
   
    const notifiaction=(message)=>{
        if (message==='Registeration Successfull') {
          toast.success(message,{
            position:toast.POSITION.BOTTOM_LEFT
           })
           return navigate('/')
        }else{
            toast.error(message,{
                position:toast.POSITION.BOTTOM_LEFT
            })
        }
      
    }
    const handleSubmit=async()=>{
        if (password&&confirm_password&&email) {
            if (confirm_password===password) {
          
                const data={email,password}
                const response=await axios.post('/register',data)
                if(response.data.message){
                    notifiaction(response.data.message)
                    
                        
                       
                }else{
                    
                    notifiaction(response.response.data.error)
                }
            }else{
               
                notifiaction('Password must be same')
            }
            
        } else {
            notifiaction('All fields are required') 
        }

      
       
    }
  return (
    <Container sx={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:3}}>
        <Box>
            <Stack spacing={2} sx={{display:'flex',justifyContent:'center'}}>
            <Typography sx={{marginX:'auto'}}>Register</Typography>
            <TextField label='Email'value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <TextField label='Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <TextField label='Confirm password' type='password' value={confirm_password} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <Button variant='contained' onClick={handleSubmit}>Register</Button>
            <ToastContainer />
            </Stack>
           
        </Box>
      
    </Container>
  )
}

export default Register
