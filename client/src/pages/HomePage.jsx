import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/AuthContext";
 

function HomePage() {
   let [auth]=  useAuth()
  return (
    <Layout title="Best Offer -ecomm">
      {JSON.stringify(auth,9,null)}
    </Layout>
  );
}

export default HomePage;
