import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserDashboardMenu from '../../components/UserDashboardMenu'
import { useAuth } from '../../context/AuthContext'
import QRCode from 'qrcode.react';
import { CiEdit } from "react-icons/ci";
import { Button, Modal } from 'antd';
import toast from 'react-hot-toast';
import axios from 'axios';
function Dashbord() {
  let [auth, setAuth] = useAuth()
  const [name,setName]=useState(auth?.user?.name)
  const [address,setAddress]=useState(auth?.user?.address)
  const [phone,setPhone]=useState(auth?.user?.phone)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails,setUserDetails] =useState (JSON.stringify({
    Name: auth?.user?.name,
    address: auth?.user?.address,
    Mobile: auth?.user?.phone
  }))
  let [qrCodevalue,setQRCodevalue]=useState('')
  useEffect(()=>{
       setQRCodevalue(userDetails)
  },[userDetails,auth])
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk =async () => {
    
    try {
      let details={name,address,phone,email:auth?.user?.email}
      console.log(details)
      let {data}=await axios.put(`/api/v1/user-update`,details,{headers:{Authorization:auth?.token}})
      if(data.success){
        setIsModalOpen(false);
        toast(data.message)
        setAuth(prevState => ({
          ...prevState,
          user: {
            ...prevState.user,
            name: name,
            address: address,
            phone: phone
          }
        }))
      }
      else{
        toast(data.message)
        setIsModalOpen(false);
      }
    } catch (error) {
      toast("Something worng while updating")
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Layout>
      <div className="container">
        <h1 className='text-center m-3'style={{color:"#5cbfb9"}}>User Dashboard</h1>
        <div className="row d-flex justify-content-start">
          <div className="col-md-3">
            <UserDashboardMenu />
          </div>
          <div className="col-md-6">
            <h6>Name : {auth.user?.name}</h6>
            <h6>Address : {auth.user?.address}</h6>
            <h6>Mobile No : {auth.user?.phone}</h6>
            <Button type="primary" onClick={showModal}>
              <CiEdit /> Edit Details
      </Button>
      <Modal title="Admin Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <div className='d-flex  flex-column'>
       <input type="text" className='form-control m-2' placeholder='Enter your Name...'value={name} onChange={(e)=>{
        setName(e.target.value)
       }}/>
        <input type="text" className='form-control m-2'placeholder='Enter your Address...' value={address} onChange={(e)=>{
          setAddress(e.target.value)
        }}/>
        <input type="text"className='form-control m-2' placeholder='Enter your MobileNo...'value={phone} onChange={(e)=>{
          setPhone(e.target.value)
        }}/>
       </div>
      </Modal>
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