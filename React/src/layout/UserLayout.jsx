import UserDashboard from '@/public/User/UserDashboard'
import UserNav from '@/public/User/UserNav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='h-screen w-screen flex flex-row overflow-x-hidden m-0 p-0 overflow-y-auto'>
      <UserDashboard />
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <UserNav />
        <div className='h-[92vh] w-full bg-primary/10'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default UserLayout