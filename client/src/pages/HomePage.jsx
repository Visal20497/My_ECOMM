import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import useCategory from '../hook/useCategory.js'
import { Checkbox, Radio } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MoreDeatils from "../components/form/MoreDeatails";
import AddToCart from "../components/form/AddToCart.jsx";
import { Price } from "../components/Price.js";



function HomePage() {
  let { categories } = useCategory()
  let navigate = useNavigate()
  let [selectedCategory, setSelectedCategory] = useState([])
  let [price, setPrice] = useState('')
  let [filterData, setFilterData] = useState([])
  let [limitProduct, setLimitProduct] = useState([])

  //product count
  let [productCount, setProductCount] = useState('')

  //page Count
  let [pageCount, setPageCount] = useState(1)


  // this is for the handling the category
  function changeCategoryHandler(e, id) {
    let all = [...selectedCategory]
    let checked = e.target.value
    if (checked) {
      all.push(id)
    } else {
      all = all.filter((data) => {
        return data !== id
      })
    }
    setSelectedCategory([...all])
  }

  // this is for the price  handler
  function priceHandler(e) {
    setPrice(e.target.value)
  }

  //this is for the filter the product 
  async function filterHandler() {
    let res = await axios.post('/api/v1/filter-product', { price, checked: selectedCategory })
    setFilterData(res.data.products)
  }
  useEffect(() => {
    filterHandler();
  }, [price, selectedCategory]);

  // this is for the total Count

  async function totalCount() {
    try {
      let { data } = await axios.get("/api/v1/totalProduct")
      setProductCount(data.total)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    totalCount()
  }, [])

  // this is for the prodcutList
  async function productList() {
    let { data } = await axios.get(`/api/v1/product-list/${pageCount}`)
    setLimitProduct([...data.products, ...limitProduct]);
  }
  useEffect(() => {
    productList()
  }, [pageCount])



  // this is for the single pages Handler
  function singlPageHandler(id) {
    navigate(`/product-details/${id}`)
  }


  return (
    <Layout title="Best Offer -ecomm">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="category-checkbox mt-2">
              <h6>All Category</h6>
              <hr />
              <div className="mt-1">
                {categories.map((item) => {
                  return (
                    <div key={item._id}>
                      <Checkbox
                        value={item._id}
                        className="p-2"
                        style={{ fontSize: "16px" }}
                        onChange={(e) => {
                          changeCategoryHandler(e, item._id);
                        }}
                      >
                        {item.name}
                      </Checkbox>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="price-range mt-2">
              <h6> Filter By Price</h6>
              <hr />
              <div className="mt-2">
                <Radio.Group onChange={priceHandler}>
                  {Price.map((item) => {
                    return (
                      <div key={item._id} className="p-2">
                        <Radio value={item.array}>{item.name}</Radio>
                      </div>
                    );
                  })}
                </Radio.Group>
              </div>
            </div>
            <div className="mt-2">
              <button
                className="btn btn-danger"
                onClick={() => {
                  window.location.reload();
                }}
              >
                CLEAR ALL
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <h4 className="text-center mt-2"> All Products </h4>
            <p className="text-end">
              {price || selectedCategory.length > 0 ? (
                <p>
                  {filterData.length}/{productCount} Found
                </p>
              ) : (
                `All Product ${productCount}`
              )}
            </p>
            <div className="row">
              {limitProduct.length == 0 && <h4>loading....</h4>}
              {limitProduct.length > 0 && (
                <>
                  {(selectedCategory.length > 0 || price
                    ? filterData
                    : limitProduct
                  ).map((item, i) => {
                    let {
                      name = "unknow",
                      price = 0,
                      brand = "unknown",
                      images = "https://newhorizoncollegeofengineering.in/applied_science_elementor/wp-content/uploads/2020/01/default-placeholder.png",
                    } = item;
                    return (
                      <div className="col-md-4 mb-3" key={i}>
                        <div className="card">
                          <div className="card-body">
                            <div className="img">
                              <img
                                src={images[0]?.url}
                                alt={images[0]?.url}
                                className="img-fluid"
                              />
                            </div>
                            <p>
                              <b>{name}</b>
                            </p>
                            <p>{brand}</p>
                            <p>{price}</p>
                            <div className="action d-flex">
                              <MoreDeatils p_id={item._id} singlPageHandler={singlPageHandler} />
                              <AddToCart />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center m-3">
            {productCount > limitProduct.length && (
              <button
                className="btn btn-warning"
                onClick={() => {
                  setPageCount(pageCount + 1);
                }}
              >
                LOAD MORE
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
