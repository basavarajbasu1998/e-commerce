import React from 'react'
// import Header from '../homepages/Header'
// import Home from '../homepages/Home'
import { Navigate, useRoutes } from 'react-router-dom'
// import Product from '../homepages/Product'
// import Login from '../pages/Login'

import AdminDashboard from '../admin/admindashboard/AdminDashboard'
import SubauaLayout from '../layout/subaua/SubauaLayout'
import AdminProduct from '../admin/admindashboard/AdminProduct'
import AdminAddProduct from '../admin/admindashboard/AdminAddProduct'
import Customer from '../admin/customer/Customer'
import Order from '../admin/order/Order'
import AddUpdateProduct from '../admin/admindashboard/AddUpdateProduct'
import MultipleAddProduct from '../admin/multipleproduct/MultipleAddProduct'
import ViewEachProduct from '../admin/admindashboard/ViewEachProduct'
import EachAddProduct from '../admin/eachproduct/EachAddProduct'
import EachViewProduct from '../admin/eachproduct/EachViewProduct'
import EachProdouctDetiles from '../admin/eachproduct/EachProdouctDetiles'
import MultipleProduct from '../admin/multipleproduct/MultipleProduct'
import MultipleViewProduct from '../admin/multipleproduct/MultipleViewProduct'

const AdminDashBoard = () => {

    const adminRoutes = useRoutes([
        {
            path: "/shop/",
            element: <SubauaLayout />,
            children: [
                { element: <Navigate to="/shop/dashboard" />, index: true },
                { path: "dashboard", element: <AdminDashboard /> },
                { path: "adminproduct", element: <AdminProduct /> },
                { path: "adminaddproduct", element: < AdminAddProduct /> },
                //===================================== main =====================================
                { path: "viewproduct/:productId", element: <ViewEachProduct /> },
                { path: "addupdate/:id", element: <AddUpdateProduct /> },
                { path: "eachproductview/:productId", element: <EachViewProduct /> },
                { path: "eachproduct/:productId", element: <EachAddProduct /> },
                { path: "eachproductdetiles/:productId", element: <EachProdouctDetiles /> },

                // ======================================= SUB Product ==================================

                { path: "multipleproduct/:productId", element: <MultipleProduct /> },

                { path: "multipleview/:id", element: <MultipleViewProduct /> },

                { path: "multipleaddproduct/:productId", element: <MultipleAddProduct /> },
               
                // ==================================================== normal pages ===================================
                { path: "customer", element: <Customer /> },
                { path: "order", element: <Order /> },
            ]
        }
    ])
    return (

        <div>{adminRoutes}</div>
    )
}

export default AdminDashBoard


