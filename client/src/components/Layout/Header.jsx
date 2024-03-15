import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Badge } from "antd";
import { AiFillHome } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { RiRegisteredFill } from "react-icons/ri";
import { TbLogin } from "react-icons/tb";
import Search from "../form/Search";
import useCategory from "../../hook/useCategory";
import useCart from '../../hook/useCart.js'
import '../../index.css'
import { BiLogoVenmo } from "react-icons/bi";


function Header() {
  let [auth, setAuth] = useAuth();
  let [cart]=useCart()
  let {categories}=useCategory()
  //function for logouthandler
  function logoutHandler() {
    setAuth({ user: "", token: null });
  }
 
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3 fixed-top" style={{backgroundColor:"#c6c995"}}>
      <div className="container-fluid " >
        <Link className="navbar-brand d-flex align-items-center gap-2 new-navbar3" to="/" style={{color:"#3d593b",fontSize:"23px"}}>
        <BiLogoVenmo />  Vishal~Mart
        </Link>
       <Search/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link className="nav-link  d-flex align-items-center gap-1 new-navbar"  aria-current="page" to="/" style={{color:"white"}} >
              <AiFillHome />  Home
              </Link>
            </li>
            <li className="nav-item ">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle new-navbar"
                  to="/all-category"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:"white"}}
                >
                < MdCategory/>  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={"/all-category"}>
                      All Category
                    </Link>
                  </li>
                  {categories.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link
                          className="dropdown-item"
                          to={`/all-category/${item.slug}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </li>
            {auth?.token ? (
              <>
                <li className="nav-item dropdown"  style={{color:"white"}}>
                  <Link
                    className="nav-link dropdown-toggle d-flex align-items-center gap-1 new-navbar"
                     to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:"white"}}
                  >
                   <FaUserSecret /> {auth?.user?.name.toUpperCase()}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item " to={auth.user.role===true?"/dashboard/admin":"/dashboard/user"}>
                      <MdDashboard /> DASHBOARD
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item new-navbar" onClick={logoutHandler}>
                      <IoLogOutSharp />  LOGOUT
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link new-navbar" to="/signup"  style={{color:"white"}}>
                  <RiRegisteredFill /> REGISTER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link new-navbar" to="/signin"  style={{color:"white"}}>
                  <TbLogin /> LOGIN
                  </NavLink>
                </li>
              </>
            )}

            {/* <li className="nav-item">
              <NavLink className="nav-link d-flex align-items-center gap-1" to="/cart"  style={{color:"white"}}>
              <FaCartArrowDown />  CART(0)
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link new-navbar" to="/cart">
                <Badge count={cart.length} showZero > <div style={{color:"white",padding:"6px"}}> <FaCartArrowDown /></div> </Badge>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
