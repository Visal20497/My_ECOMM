import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import SignIn from "./pages/auth/SignIn";
import Signup from "./pages/auth/Signup";
import Dashbord from "./pages/user/Dashbord";
import ProtectedRoute from "./components/route/ProtectedRoute.js";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Order from "./pages/user/Order";
import Profile from "./pages/user/Profile";
import AdminProtectedRoute from "./components/route/AdminProtectedRoute.js";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import AllOrders from "./pages/admin/AllOrders";
import Users from "./pages/admin/Users";
import Products from "./pages/admin/Products.jsx";
import DeatailsProduct from '../src/pages/DeatailsProduct.jsx';
import UpdateProduct from "./pages/admin/UpdateProduct.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import AllCategory from "./pages/AllCategory.jsx";
import Checkout from "./pages/Checkout.jsx";
import SignInByOtp from './pages/auth/SignInByOtp.jsx'
import Box from "./pages/auth/Box.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/all-category" element={<AllCategory/>} />
      <Route path="/all-category/:slug" element={<CategoryPage/>} />
      <Route path="/product-details/:id" element={<DeatailsProduct/>} />
      <Route path="/cart" element={<Checkout/>}/>
      <Route path='/otp' element={<SignInByOtp/>}/>
      <Route path='/box' element={<Box/>}/>
      



      {/* //this is for the normal user */}
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="user" element={<Dashbord />} />
        <Route path="user/order" element={<Order />} />
        <Route path="user/profile" element={<Profile />} />
      </Route>

      {/* //this is for admin user */}
      <Route path="/dashboard" element={<AdminProtectedRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="admin/create-category" element={<CreateCategory/>}/>
        <Route path="admin/create-product" element={<CreateProduct/>}/>
        <Route path="admin/products" element={<Products/>}/>
        <Route path="admin/all-orders" element={<AllOrders/>}/>
        <Route path="admin/products/:id" element={<UpdateProduct/>}/>
        <Route path="admin/users" element={<Users/>}/>
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
