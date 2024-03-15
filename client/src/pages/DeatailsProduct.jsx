import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import useProduct from "../hook/useProduct";
import AddToCart from "../components/form/AddToCart";
import axios from "axios";
import SimilarProduct from "./SimilarProduct";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { Tb3DCubeSphere } from "react-icons/tb";
import { Rate } from 'antd';
import { Flex, Spin } from "antd";



function DeatailsProduct() {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let { product, single_loader, single_error, singleProduct } = useProduct();
  let [similarProduct, setSimilarProduct] = useState([])
  useEffect(() => {
    singleProduct(`/api/v1/single-product/${id}`);
  }, [id]);
  async function similarProductHandler() {
    let { data } = await axios.get(`/api/v1/similar-product/${product?._id}/${product.category?._id}`)
    setSimilarProduct(data.products)
    console.log(similarProduct)

  }
  useEffect(() => {
    if (Object.keys(product).length > 0) {
      similarProductHandler()
    }
  }, [single_loader])
  return (
    <Layout title={"Details Product-ecom"}>
      <div className="container">
        <h4 className="text-center m-3"> Product Details </h4>
        {single_loader && <Flex gap="small" vertical>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </Flex>}
        {!single_loader && !single_error && Object.keys(product).length > 0 && (
          <>
            <div className="row">
              <div className="col-md-7">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-5">
                    {product?.images?.map((item, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setCount(i);
                          }}
                        >
                          <img
                            src={item.url}
                            style={{ height: "10rem", width: "10rem" }}
                            alt={item.url}
                            className="img-fluid"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-md-5">
                    <img style={{ height: "13rem", width: "18rem" }}
                      src={product?.images[count]?.url}
                      alt={product?.images[count]?.url}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h4>{product?.name}</h4>
                <p>{product?.brand}</p>
                <p>{product?.quantity ? "In Stock" : "Out of Stock"}:{product?.quantity ? product?.quantity : ''}</p>
                <p>{product?.shipping === "yes" ? "Available" : "Not Available"}</p>
                <Rate allowHalf defaultValue={3.5} />
                <p>{product?.description}</p>
                <div className="d-flex justify-content-start">
                  <span className="p-4"><TbTruckDelivery />Free Delivery</span>
                  <span className="p-4"><TbReplace /> 20 Days Replacement</span>
                  <span className="p-4"><CiDeliveryTruck />Delivery</span>
                  <span className="p-4"><Tb3DCubeSphere />Warranty</span>
                </div>
                <AddToCart prod={product} />

              </div>
            </div>
          </>
        )}
        <div className="row">
          <h4 className="text-start m-5">Similar Product</h4>
          <SimilarProduct product={similarProduct} />
        </div>
      </div>
    </Layout>
  );
}

export default DeatailsProduct;