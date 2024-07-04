import { BrowserRouter, Route } from 'react-router-dom';

// import Login from './pages/Login';
// import Home from './homepages/Home';
// import Product from './homepages/Product';
// import Header from './homepages/Header';
// import Router from './router/Router';
// import Contact from './homepages/Contact';
// import Footer from './homepages/Footer';
// import CustomCard from './utiles/card/CustomCard';
// import AdminDashboard from './admin/admindashboard/AdminDashboard';
// import DashBoard from './router/AdminDashBoard';
// import Home from './homepages/Home';
// import Product from './homepages/Product';
import Router from './router/Router';
// import ScrollHideNavbar from './other/ScrollHideNavbar';
// import ControlledCarousel from './homedashboard/ControlledCarousel';
// import ProductForms from './other/ProductForms';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <DashBoard />
        <Footer />
      </BrowserRouter> */}
      <ToastContainer />
      <BrowserRouter>
        <Router />
      </BrowserRouter>



    </>

  );
}

export default App;
