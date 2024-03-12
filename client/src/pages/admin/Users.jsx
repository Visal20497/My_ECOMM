import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminDashboardMenu from '../../components/AdminDashboardMenu'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Select } from "antd";
import { Option } from "antd/es/mentions";

function Users() {
    let [allusers, setAllUser] = useState([])
    let [flag, setFlag] = useState(false)
    let role=["User","Admin"]
    async function AllUsers() {
        try {
            let { data } = await axios(`/api/v1/all-users`)
            if (data.success) {
                setAllUser(data.users)
            }
        } catch (error) {
            toast(error.message)
        }
    }
    useEffect(() => {
        AllUsers()
    }, [flag])
   async function userRole(value, id) {
        try {
            let {data}=await axios.post('/api/v1/user-role',{id,role:value})
            if(data.success){
                toast(data.message)
                setFlag(!flag)
            }
        } catch (error) {
           toast(error.message) 
        }
    }

    return (
        <Layout title={"All Orders -Ecomm"}>
            <div className="container">
                <h1 className='text-center mt-3 mb-2' style={{ color: "#a10a37" }}>Admin Dashboard</h1>
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboardMenu />
                    </div>
                    <div className="col-md-9">
                        <React.Fragment className='container '>
                            <table className='table border p-2 text-center'>
                                <thead >
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Role</th>
                                </thead>
                                <tbody >
                                    {allusers?.map((item) => {
                                        return <tr>
                                            <td> {item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td> {item.address}</td>
                                            <td> <Select
                                                style={{ width: "100px" }}
                                                value={!item.role ? "User" : "Admin"}
                                                showSearch
                                                onChange={(e) => {
                                                    userRole(e, item._id)
                                                }}>   
                                                {role?.map((data)=>{
                                                    return <Option value={data==="User"?false:true}>{data}</Option>
                                                })}
                                               
                                                 </Select> 
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </React.Fragment>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Users