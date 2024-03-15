import React, { useState } from "react";
import Box from "./Box";
import Layout from "../../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function OtpSystem() {
  let [search, setSearch] = useState();
  let [flag, setFlag] = useState(false);
  let nevigate=useNavigate()
  async function verifyHandler(e) {
    e.preventDefault()
    try {
        if(!search){
            toast('Email is required')
        }
        else{
            let {data}=await axios.post(`api/v1/otp`,{email:search})
            if(data.success){
                toast(data.message)
                setFlag(true)
                nevigate('/box')
                
            }
        }
    } catch (error) {
        toast(error.message)
    }
    
  }
  return (
    // <div>OtpSystem</div>
    <>
    <Layout title="Login -Ecom">
    {!flag && (
        <>
         <div className="container " style={{ height: "70vh", }} >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5 mt-5">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                
                />
              </div>
             <Link to='/signin'> <button
                type="submit"
                className="btn btn-primary" >
                Login By Password
              </button></Link>
              <button className='btn btn-info ms-2' style={{display:flag?"none":"inline"}} onClick={verifyHandler} >Verify OTP</button>
              <hr />
            </form>
          </div>
        </div>
      </div>
        </>
      )}
      {flag && <Box  search={search}/>}
    </Layout>
    </>
  );
}

export default OtpSystem;
