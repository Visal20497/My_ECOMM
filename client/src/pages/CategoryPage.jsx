import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import MoreDeatils from '../components/form/MoreDeatails'
import AddToCart from '../components/form/AddToCart'
import { Flex, Spin } from "antd";

function CategoryPage() {
    let {slug}=useParams()
    let [product,setProduct]=useState([])
     async function getDataBySlug()
     {
      try{
        let {data}=await axios.get(`/api/v1/product-category/${slug}`)
         setProduct(data.product)
      }
      catch(err)
      {
        console.log(err)
        toast(err.message)
      }
     }
     let navigate=useNavigate()
    function singlPageHandler(id)
    {
        
         navigate(`/product-details/${id}`)
    }
    useEffect(()=>{
         getDataBySlug()
    },[slug])
  return (
      <Layout title={"Category Page:Ecom"}>
        <div className="container m-3">
            <div className="row d-flex justify-content-evenly">
            {product.length===0 && <Flex gap="small" vertical>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </Flex>}
                {product.length>0 && product.map((item)=>{
                    return <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <img src={item?.images[0]?.url} alt={item?.images[0]?.url} className='img-fluid'/>
                                </div>
                                <h6>{item?.name}</h6>
                                <p>{item?.description}</p>
                                <p><strong>Brand :</strong> {item?.brand}</p>
                                <div className="d-flex">
                                <MoreDeatils p_id={item._id} singlPageHandler={singlPageHandler}  />
                               <AddToCart prod={item}/>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

      </Layout>
  )
}

export default CategoryPage