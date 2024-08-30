
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
              }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='formContainer'>
      <h1>Register Form</h1>
        <form onSubmit={registerHandler} className='formSection' >
            <h3>Username</h3>
            <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} />
            <h3>Email</h3>
            <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} />
            <h3>Password</h3>
            <input type="text" name='password' onChange={(e)=>setPassword(e.target.value)} />
            <br /><br />
            <button type='submit'>Register</button>
        </form>
        <Link href="/login">
          Already Registered? Login
        </Link>
        
    </div>
  )
}

export default RegisterForm
