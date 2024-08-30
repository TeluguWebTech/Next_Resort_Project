

import Link from 'next/link'
import React from 'react'

const UserNavigation = ({userName}) => {
  return (
    <div className='navSection'>
    <div className="title">
        <h2>Holiday Resort</h2>
    </div>
   
    <div className="contact">
        Call now : 123 456 789
    </div>
    <Link href="/user/invoice" className='link'>
    <div className="bookings">
      Bookings
    </div>
    </Link>
    <p>Welcome: {userName} </p>
    <Link href="/api/auth/signout" className='link'>
    <div className="logout">
        Logout
    </div>
    </Link>
</div>
  )
}

export default UserNavigation
