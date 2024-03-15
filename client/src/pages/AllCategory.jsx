import React from 'react'
import Layout from '../components/Layout/Layout'
import useCategory from '../hook/useCategory'
import { NavLink } from 'react-router-dom'
import { Flex, Spin } from "antd";

function AllCategory() {
    let { categories } = useCategory()
    return (
        <Layout title={"All Category-Ecom"}>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col">
                        <h3 className='text-center'>All Category</h3>
                        {categories.length === 0 && <Flex gap="small" vertical>
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  </Flex>}
                        <div className="row categoryCard">
                            {categories.length > 0 && categories.map((item) => {
                                return <div className="col-md-4  m-2">
                                    <div className="card ">
                                        <div className="card-body  ">
                                            <h3 ><NavLink className='categoryCard card text-center' style={{ textDecoration: "none" }} to={`/all-category/${item.slug}`}> {item.name}</NavLink></h3>
                                        </div>
                                    </div>

                                </div>

                            })}


                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AllCategory