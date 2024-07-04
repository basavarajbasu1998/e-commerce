import React from 'react'
// import DashBoard from './AdminDashBoard'
// import AdminDashboard from '../admin/admindashboard/AdminDashboard'
import UserRoutes from './UserRouter'
// import DashboardLayout from '../layout/dashboardlayout/DashboardLayout'
import AdminDashBoard from './AdminDashBoard'

const Router = () => {
  const user = "user"



  if (user === "uer") {
    console.log("userrrrrrrrrrrrrrrrrrrrr", user)
    return <AdminDashBoard />
  } else {
    console.log("not a userssssssssssssssssssssssssss", user)
    return <UserRoutes />
  }

}

export default Router