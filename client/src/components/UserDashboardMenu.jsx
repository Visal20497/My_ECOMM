import React from "react";
import { Link } from "react-router-dom";
import { FaBorderAll } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

function UserDashboardMenu() {
    let navStyle={textDecoration:"none"}
    
  return (
    <>
      <ul className="list-group ">
       <Link style={navStyle} to={"/dashboard/user/order"}><li className="list-group-item list-group-item-action dashboard" ><FaBorderAll /> Orders</li></Link> 
        <Link style={navStyle} to={"/dashboard/user/profile"}> <li className="list-group-item list-group-item-action dashboard" ><FaUserEdit /> Profile</li> </Link> 
      </ul>
    </>
  );
}

export default UserDashboardMenu;
