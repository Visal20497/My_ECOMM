import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminDashboardMenu from '../../components/AdminDashboardMenu'
import { Card } from "antd";
import { useAuth } from '../../context/AuthContext';
import QRCode from 'qrcode.react';

function AdminDashboard() {
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
        <h1 className='text-center m-3' style={{ color: "#a10a37" }}>Admin Dashboard</h1>
        <div className="row d-flex justify-content-start">
          <div className="col-md-3">
            <AdminDashboardMenu />
          </div>
          <div className="col-md-6">
            <Card
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <h6>Name : {auth.user?.name}</h6>
              <h6>Address : {auth.user?.address}</h6>
              <h6>Mobile No : {auth.user?.phone}</h6>
              <button className='btn btn-primary'>Edit Details</button><br/>
             
            </Card>
          </div>
           <div className="col-md-3">
             <QRCode value={qrCodevalue} style={{margin:"2px"}}/>
             </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard