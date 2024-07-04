// import { Navigate, useRoutes } from "react-router-dom";
// import DashboardLayout from "../layout/dashboardlayout/DashboardLayout";
// // import Home from "../homepages/Home";
// // import Product from "../homepages/Product";
// import Contact from "../homepages/Contact";
// import AuthLayout from "../layout/authlayout/AuthLayout";
// import Login from "../pages/Login";
// import Ragister from "../pages/Ragister";



// import React from 'react'


// import HomeDashboard from "../homedashboard/HomeDashboard";
// import ProductList from "../homedashboard/product/ProductList";
// import SubProductList from "../homedashboard/product/SubProductList";
// import EachProductList from "../homedashboard/product/EachProductList";
// import AddCartPrice from "../homedashboard/product/cartdetailes/AddCartPrice";
// import AddCartAddress from "../homedashboard/product/cartdetailes/AddCartAdress";
// import PaymentDetails from "../homedashboard/product/cartdetailes/PaymentDetiles";
// import OrderConfirmationPage from "../other/OrderConfirmationPage";
// import MenProduct from "../homedashboard/product/category/MenProduct";
// import WomenProduct from "../homedashboard/product/category/WomenProduct";
// import WatchList from "../homedashboard/product/cartdetailes/WatchList";

// const UserRouter = () => {

//     const userRoutes = useRoutes([
//         {
//             path: "/",
//             element: <DashboardLayout />,
//             children: [
//                 { element: <Navigate to="/home" />, index: true },
//                 { path: "/home", element: <HomeDashboard /> },
//                 // { path: "/home", element: <Home /> },
//                 { path: "/product", element: <ProductList /> },
//                 { path: "/contact", element: <Contact /> },
//                 { path: "/subproduct/:id", element: <SubProductList /> },
//                 { path: "/eachproduct/:id", element: <EachProductList /> },
//                 { path: "/addcart", element: <AddCartPrice /> },
//                 { path: "/addadress", element: <AddCartAddress /> },
//                 { path: "/paymentdetiles", element: <PaymentDetails /> },
//                 { path: "/orderconform", element: <OrderConfirmationPage /> },
//                 { path: "/men", element: <MenProduct /> },
//                 { path: "/women", element: <WomenProduct /> },
//                 { path: "/watchlist", element: <WatchList /> }
//             ]
//         },

//         {
//             path: "/auth",
//             element: <AuthLayout />,
//             children: [
//                 {
//                     element: <Navigate to="auth/login" />, index: true

//                 },
//                 { path: "/auth/login", element: <Login /> },
//                 { path: "/auth/register", element: <Ragister /> }
//             ]
//         }
//     ])

//     return (
//         <div>{userRoutes}</div>
//     )
// }
// export default UserRouter;



import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layout/dashboardlayout/DashboardLayout';
import HomeDashboard from '../homedashboard/HomeDashboard';
import ProductList from '../homedashboard/product/ProductList';
import SubProductList from '../homedashboard/product/SubProductList';
import EachProductList from '../homedashboard/product/EachProductList';
import AddCartPrice from '../homedashboard/product/cartdetailes/AddCartPrice';
import AddCartAddress from '../homedashboard/product/cartdetailes/AddCartAdress';
import PaymentDetails from '../homedashboard/product/cartdetailes/PaymentDetiles';
import OrderConfirmationPage from '../other/OrderConfirmationPage';
import MenProduct from '../homedashboard/product/category/MenProduct';
import WomenProduct from '../homedashboard/product/category/WomenProduct';
import WatchList from '../homedashboard/product/cartdetailes/WatchList';
import AuthLayout from '../layout/authlayout/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Ragister';
import Contact from '../homepages/Contact';
import KidsProduct from '../homedashboard/product/category/KidsProduct';

const UserRouter = () => {
    console.log('UserRouter component rendered');

    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Navigate to="/home" />} />
                <Route path="home" element={<HomeDashboard />} />
                <Route path="product" element={<ProductList />} />
                <Route path="contact" element={<Contact />} />
                <Route path="subproduct/:id" element={<SubProductList />} />
                <Route path="eachproduct/:id" element={<EachProductList />} />
                <Route path="addcart" element={<AddCartPrice />} />
                <Route path="addadress" element={<AddCartAddress />} />
                <Route path="paymentdetiles" element={<PaymentDetails />} />
                <Route path="orderconform" element={<OrderConfirmationPage />} />
                <Route path="men" element={<MenProduct />} />
                <Route path="women" element={<WomenProduct />} />
                <Route path='kids' element={<KidsProduct />} />
                <Route path="watchlist" element={<WatchList />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route index element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
};

export default UserRouter;
