import React from 'react'
import Layout from '../components/Layout/Layout'
import useCategory from '../hook/useCategory'
import { NavLink } from 'react-router-dom'

function AllCategory() {
    let { categories } = useCategory()
    return (
        <Layout title={"All Category-Ecom"}>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col">
                        <h1>All Category</h1>
                        {categories.length === 0 && <h1>wait....</h1>}
                        <div className="row">
                            {categories.length>0 && categories.map((item)=>{
                        return  <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                               <h5><NavLink style={{textDecoration:"none"}} to={`/all-category/${item.slug}`}>{item.name}</NavLink></h5>
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