import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserDashboardMenu from '../../components/UserDashboardMenu'
import { useAuth } from '../../context/AuthContext'
import QRCode from 'qrcode.react';
import { CiEdit } from "react-icons/ci";
function Dashbord() {
  let [auth, setAuth] = useAuth()
  const [userDetails,setUserDetails] =useState (JSON.stringify({
    Name: auth?.user?.name,
    address: auth?.user?.address,
    Mobile: auth?.user?.phone
  }))
  let [qrCodevalue,setQRCodevalue]=useState('')
  useEffect(()=>{
       setQRCodevalue(userDetails)
  },[userDetails])
  return (
    <Layout>
      <div className="container">
        <h1 className='text-center m-3'>User Dashboard</h1>
        <div className="row d-flex justify-content-start">
          <div className="col-md-3">
            <UserDashboardMenu />
          </div>
          <div className="col-md-6">
            <h6>Name : {auth.user?.name}</h6>
            <h6>Address : {auth.user?.address}</h6>
            <h6>Mobile No : {auth.user?.phone}</h6>
            <button className='btn btn-primary'><CiEdit /> Edit Details</button><br />
          </div>
          <div className="col-md-3">
             <QRCode value={qrCodevalue} style={{margin:"2px"}}/>
             </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashbord