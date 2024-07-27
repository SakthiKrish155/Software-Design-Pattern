import { Button } from '@/components/ui/button'
import { CircleHelp, Home, Layers, Power, Settings, StickyNote, UserCircleIcon } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const AdminDashboard = () => {
  const AdminLinks = [
    {
      title: 'Dashboard',
      link: '/admin/content',
      icon: Home
    },
    {
      title: 'Projects',
      link: '/admin/projects',
      icon: StickyNote
    },
    {
      title: 'Tasks',
      link: '/admin/tasks',
      icon: Layers
    },
    {
      title: 'Users',
      link: '/admin/users',
      icon: UserCircleIcon
    }
  ]

  return (
    <div className='h-screen w-1/6 flex flex-col justify-center items-center'>
      <div className='h-[5%] text-primary font-bold text-l flex flex-col justify-between items-center'>
        <img src='https://ik.imagekit.io/s06oi31ye/Images/logo-svg.svg?updatedAt=1722105104552' className='h-60 w-60' />
      </div>
      <div className='h-[90%] w-full flex flex-col justify-center items center gap-2'>
        {
          AdminLinks.map((data, index) => (
            <NavLink key={index} to={data.link} className='hover:bg-primary/10 font-bold mt-2 w-full'>
              <span className='flex justify-start items-center py-2 my-1 font-medium rounded-md cursor-pointer'>
                {React.createElement(data.icon, { size: 20, className: "flex gap-3 mr-5 ml-5" })}
                {data.title}
              </span>
            </NavLink>
          ))
        }
        <hr className="my-3" />
      </div>
      <div className='h-[5%] w-full flex flex-col justify-center items-center'>
        <div className='p-0 m-0 w-full flex flex-row justify-between items-center gap-3'>
          <div className='w-1/3 flex justify-center items-center'>
            <Settings />
          </div>
          <div className='w-2/3 flex justify-center items-center'>
            <CircleHelp />
          </div>
          <div>
            <Link to="/" className="w-1/3">
              <Button className="bg-background hover:bg-transparent font-bold flex items-center justify-center">
                <span className="text-red-500 flex items-center justify-center">
                  <Power size={20} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard