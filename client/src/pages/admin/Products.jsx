import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminDashboardMenu from "../../components/AdminDashboardMenu";

function Products() {
  return (
    <Layout title={"Admin All Products- ecom"}>
      <div className="container">
      <h1 className="text-center mt-3 mb-2"style={{color:"#a10a37"}}>Admin Dashboard</h1>
        <div className="row mt-4 d-flex justify-content-start">
            <div className="col-md-3">
                <AdminDashboardMenu/>
            </div>
            <div className="col-md-9">
                <h3 className="text-center">All Products</h3>
                <hr />
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
