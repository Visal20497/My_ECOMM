import React from "react";
import { Link } from "react-router-dom";

function UserDashboardMenu() {
    let navStyle={textDecoration:"none"}
    
  return (
    <>
      <ul className="list-group">
       <Link style={navStyle} to={"/dashboard/user/order"}><li className="list-group-item list-group-item-action">Orders</li></Link> 
        <Link style={navStyle} to={"/dashboard/user/profile"}> <li className="list-group-item list-group-item-action">Profile</li> </Link> 
      </ul>
    </>
  );
}

export default UserDashboardMenu;
