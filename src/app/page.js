
import React from 'react'
import DBConnection from './utils/config/db'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import UserNavigation from './components/UserNavigation'
import AdminPage from './admin/page'
import ProductCollection from './components/ProductCollection'

const HomePage = async() => {

  const session = await auth()

  await DBConnection()
 
  if(!session){
    redirect("/login")
  }



  // console.log('user check: ', userName)

  console.log("role check;:", session.role)

  console.log("username chekc:", session.username)

  const userName = session.username




  return (
    <div>
      {session.role === 'user' &&  (
        <>
        <UserNavigation userName = {userName}/>
        <img src='banner.jpg' alt='banner' className='bannerImage'/>
        <ProductCollection />
        </>
      ) }
      {session.role === 'admin' &&
        <AdminPage /> 
    }
    </div>
  )
}

export default HomePage
