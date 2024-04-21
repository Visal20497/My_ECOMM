import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

function Layout({ children,description,keywords,author,title }) {
  return (
    <>
      <Toaster />
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header  />
      <main style={{ minHeight: "75vh" ,marginTop:"100px"}}>{children}</main>
      <Footer />
    </>
  );
}
Layout.defaultProps={
  description:"Login Registration Assignment",
  keywords:"Assignment",
  author:"Vishal",
  title:"My Assignment"
}

export default Layout;
