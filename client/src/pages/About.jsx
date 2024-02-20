import React from "react";
import Layout from "../components/Layout/Layout";

function About() {
  return (
    <Layout title="About -ecomm"  >
      <div className="container">
        <h2 className="text-center m-3" style={{color:"#429e9e"}}>About Us</h2>
        <div className="row d-flex">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8" style={{color:"#56429e",fontSize:"21px"}}>
            <div>
              <p>
                An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.

                It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.
              </p>
              <p>
                Data powers the most successful e-commerce operations, which take advantage of best practices such as targeted email marketing, audience segmentation, and marketing automation. For example, following up with a customer after they have placed an item in an online shopping cart but didn’t complete the transaction can significantly increase your likelihood of making the sale.
                E-commerce has many benefits for businesses, as well as a few potential drawbacks. Online stores can improve the customer experience because shopping online is easy and convenient. Additionally, with a low startup cost and a wide range of tools available for entrepreneurs, starting an e-commerce business is much easier than starting another type of business. </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
