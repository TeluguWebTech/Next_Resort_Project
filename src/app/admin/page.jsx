

import React from 'react'
import { auth } from '../auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import AdminNavbar from '../components/AdminNavbar'
import AddProduct from '../components/AddProduct'



const AdminPage = async() => {

  const session = await auth()

  if(!session){
    redirect("/login")
  }



  return (
      <div>
        {session ? (
          <>
          <AdminNavbar />
          <AddProduct />

          </>
        ) : "Not authorized"
      }
      </div>
   
  )
}

export default AdminPage