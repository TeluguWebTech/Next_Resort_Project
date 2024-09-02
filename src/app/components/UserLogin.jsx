

"use client"

import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import bgImage from '../../../public/background.jpg'
import Image from 'next/image';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const loginHandler = async(e)=>{
        e.preventDefault()

        const loginDetails = {email, password}
        console.log(loginDetails)

        try {
          const response = await loginAction(loginDetails)
          if(response.success){
                router.push("/")
          }else{
            setError(response.message || "login failed, Invalid Credentials")
          }
        } catch (error) {
            setError("Invalid Credentials")
        }
    }


  return (
<div >
<Image
        src="/background.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={75} 
        priority 
    />
<div className='formContainer'>

       <form onSubmit={loginHandler} className='formSection' >
      <h1>Login</h1>
           {error && <p style={{color:'red'}}>{error}</p> }
            <h3>Email</h3>
            <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} />
            <h3>Password</h3>
            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} />
            <br /><br />
            <button type='submit'>Login</button>
        <Link href="/register" className='authLink'>
         If not registered? Regiter
        </Link>
        </form>
    </div>
</div>
  )
}

export default UserLogin
