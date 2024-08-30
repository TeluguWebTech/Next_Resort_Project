

import Link from 'next/link'
import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
        <div className='navSection'>
    <div className="title">
        <h2>Holiday Resort</h2>
    </div>
   
   
   
    <p>Welcome: Admin </p>
    <Link href="/api/auth/signout" className='link'>
    <div className="logout">
        Logout
    </div>
    </Link>
</div>
    </div>
  )
}

export default AdminNavbar