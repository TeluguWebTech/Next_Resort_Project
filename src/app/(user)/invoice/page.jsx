

import { auth } from '@/app/auth'
import UserInvoice from '@/app/components/UserInvoice'
import UserNavigation from '@/app/components/UserNavigation'
import UserModel from '@/app/utils/models/User'
import React from 'react'

const InvoicePage = async() => {

  const session = await auth()

  const email = session.email

  const user = await UserModel.findOne({email:email});

  const userId = user?._id.toString();
  const bookingCount = user?.bookings.length || 0;

  console.log("userId:", userId)

  return (
    <div>
      <UserNavigation userName={session.username} bookingCount={bookingCount}/>
        <UserInvoice userId = {userId}/>
    </div>
  )
}

export default InvoicePage
