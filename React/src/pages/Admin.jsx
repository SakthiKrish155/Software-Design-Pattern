import ProjectsChart from '@/components/Admin/ProjectsChart'
import TasksChart from '@/components/Admin/TasksChart'
import TeamCharts from '@/components/Admin/TeamCharts'
import React from 'react'

const Admin = () => {
  return (
    <div className='h-full w-5/6 p-4 flex flex-col gap-y-60'>
      <div className='h-1/2 p-0 m-0 flex justify-center flex-row gap-3'>
        <div className='w-2/4 justify-center items-center'>
          <ProjectsChart />
        </div>
        <div className='w-2/4 justify-start items-center'>
          <div className='w-full h-[5vh] size-8'>
            <TasksChart />
          </div>
        </div>
      </div>
      <div className='w-[172vh]'>
        <TeamCharts />
      </div>
    </div>
  )
}

export default Admin