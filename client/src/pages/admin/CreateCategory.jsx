import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminDashboardMenu from '../../components/AdminDashboardMenu'
import CategoryForm from './../../components/form/CategoryForm'
import useCategory from './../../hook/useCategory.js'
import { useAuth } from '../../context/AuthContext.js'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Modal } from 'antd'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


function CreateCategory() {
    let { categories, setChangeCategory, changeCategory } = useCategory()
    let [auth] = useAuth()

    // this is for the reading the input
    let [category, setCategory] = useState('')

    //this is for categorySlug
    let [categoryId, setCategoryId] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    //this is for the delete handler
    async function deleteCategoryHandler(id) {
        try {
            let result = await axios.delete(`/api/v1/delete-category/${id}`, { headers: { "Authorization": auth.token } })
            if (result.data.success) {
                toast(result.data.message)
                setChangeCategory(!changeCategory)
            } else {
                toast(result.data.message)
            }

        } catch (error) {
            toast(error.message)

        }
    }


    //this is for the setting the input field
    function setInputHandler(e) {
        setCategory(e.target.value)
    }

    // this is for the adding category
    async function sumbmitCategoryHandler() {
        try {
            let result = await axios.post(`/api/v1/create-category`, { name: category }, { headers: { "Authorization": auth?.token } })
            if (result.data.success) {
                toast(result.data.message)
                setCategory('')
               
                setChangeCategory(!changeCategory)
            } else {
                toast(result.data.message)
            }
        }
        catch (error) {
            toast(error.message)
        }
    }
    const handleOk = async () => {
        try {
            let { data } = await axios.put(`/api/v1/update-category/${categoryId}`, { name: category }, { headers: { "Authorization": auth?.token } })
            if (data.success) {
                toast(data.message)
                setChangeCategory(!changeCategory)
                setCategory('')
            }
            else {
                toast(data.message)
            }
            setIsModalOpen(false)

        } catch (error) {
            toast(error.message)

        }
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }




    return (
        <Layout title={"Create Category -Ecomm"}>
            <div className="container">
                <h1 className="text-center mt-3 mb-2" style={{ color: "#a10a37" }}>Admin Dashboard</h1>
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboardMenu />
                    </div>
                    <div className="col-md-9">
                        <h4 className="text-center m-3" style={{ color: "#429e50" }}>Manage Category</h4>
                        <hr />
                        <CategoryForm category={category} setInputHandler={setInputHandler} sumbmitCategoryHandler={sumbmitCategoryHandler} />

                        {categories.length === 0 && <h1>loding....</h1>}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.length > 0 && (
                                    <>
                                        {categories?.map((item, i) => {
                                            let { _id, name } = item
                                            return <React.Fragment key={i}>
                                                <tr key={i} >
                                                    <td >{name}</td>
                                                    <td>
                                                        <button className="btn btn-primary" onClick={() => {
                                                            setIsModalOpen(true)
                                                            setCategoryId(_id)
                                                            setCategory(name)
                                                        }}><CiEdit /> Edit</button>
                                                        <button className="btn btn-danger ms-3" onClick={() => {
                                                            deleteCategoryHandler(_id)
                                                        }} >Delete <MdDelete /></button>
                                                    </td>
                                                </tr>
                                            </React.Fragment>;
                                        })}
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <CategoryForm category={category} setInputHandler={setInputHandler} sumbmitCategoryHandler={handleOk} />
                </Modal>
            </div>

        </Layout>
    )
}

export default CreateCategory