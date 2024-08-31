
'use client'

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerAction';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const router = useRouter()

    const registerHandler = async(e)=>{
        e.preventDefault()

        const userRegisterDetails = {username,email, password}
        console.log(userRegisterDetails)

        try {
              const response =  await registerAction(userRegisterDetails);
              if(response.success){
                alert("Registration success")
                  router.push("/login")
              }else {
                setError(response.message);  
            }
        } catch (error) {
            console.log(error)
            setError("An unexpected error occurred"); 
        }

    }

  return (
   <div className="loginBody">
     <div className='formContainer'>
        <form onSubmit={registerHandler} className='formSection' >
      <h1 style={{color:"white", borderBottom:'1px solid white'}}>Register </h1>
            <h3>Username</h3>
            <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} />
            <h3>Email</h3>
            <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} />
            <h3>Password</h3>
            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} />
            <br /><br />
            <button type='submit'>Register</button>
        <Link href="/login" className='authLink'>
          Already Registered? Login
        </Link>
        </form>
        
    </div>
   </div>
  )
}

export default RegisterForm
