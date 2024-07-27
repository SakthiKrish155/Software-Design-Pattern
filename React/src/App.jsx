import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import SignIn from './components/Web/SignIn'
import SignUp from './components/Web/SignUp'
import MainLayout from './layout/MainLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './public/Admin/AdminDashboard'
import UserLayout from './layout/UserLayout'
import UserDashboard from './public/User/UserDashboard'
import AdminUsers from './public/Admin/AdminUsers'
import AdminProjects from './public/Admin/AdminProjects'
import AdminTasks from './public/Admin/AdminTasks'
import Admin from './pages/Admin'
import User from './pages/User'
import UserInProgress from './public/User/UserInProgress'
import UserImportant from './public/User/UserImportant'
import UserNotStarted from './public/User/UserNotStarted'
import UserTasks from './public/User/UserTasks'
import UserCompleted from './public/User/UserCompleted'


const App = () => {
  return (
    <div>
    <Routes>
      <Route element = {<MainLayout/>}>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/signIn" element = {<SignIn/>}/>
        <Route path = "/signUp" element = {<SignUp/>}/>
      </Route>
      <Route element = {<AdminLayout/>}>
        <Route path = "/admin/content" element = {<Admin/>}/>
        <Route path = "/admin/projects" element = {<AdminProjects/>}/>
        <Route path = "/admin/tasks" element = {<AdminTasks/>}/>
        <Route path = "/admin/users" element = {<AdminUsers/>}/>
      </Route>
      <Route element = {<UserLayout/>}>
        <Route path = "/user/content" element = {<User/>}/>
        <Route path = "/user/allTasks" element = {<UserTasks/>}/>
        <Route path = "/user/completed" element = {<UserCompleted/>}/>
        <Route path = "/user/inProgress" element = {<UserInProgress/>}/>
        <Route path = "/user/important" element = {<UserImportant/>}/>
        <Route path = "/user/yetToStart" element = {<UserNotStarted/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App;