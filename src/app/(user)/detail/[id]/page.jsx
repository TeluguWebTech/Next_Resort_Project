

import { auth } from '@/app/auth'
import DynamicProduct from '@/app/components/ProductDetail'
import UserNavigation from '@/app/components/UserNavigation'
import React from 'react'

const page = async() => {
  const session = await auth()

  const userName = session.username

  return (
    <div>
      <UserNavigation userName={userName}/>
      <DynamicProduct />
    </div>
  )
}

export default page
