import React from "react";
import Layout from "../components/Layout/Layout";


function About() {

  return (
    <Layout title="About -ecomm"  >
      <div className="container">
        <h2 className="text-center m-3" style={{ color: "#429e9e" }}>About Us</h2>


        <div className="row d-flex">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about"
              className="img-fluid"
            />
            <p style={{ color: "#56429e", fontSize: "21px" }}>Design a user-friendly interface with intuitive navigation and fast loading times.
              Showcase products with high-quality images, detailed descriptions, and easy filtering options.
              Streamline the checkout process with multiple payment options and secure transactions.
              Provide reliable customer support through FAQs, live chat, and contact forms.
              Optimize for mobile devices, offer promotions, and track analytics for continuous improvement.</p>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <img src="https://media.istockphoto.com/id/1442543641/photo/customer-scanning-qr-code-with-smartphone-at-store.jpg?s=1024x1024&w=is&k=20&c=24rf6wDmAB_fyHpe7qP_NHlWWocQ6ebCiZO8vywqSeg=" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <img src="https://media.istockphoto.com/id/984835220/photo/packages-are-transported-in-high-tech-settings-online-shopping-concept-of-automatic-logistics.jpg?s=1024x1024&w=is&k=20&c=9Q9j_LsYY_8Z4qwtYfiuR89gpd7n8AcXoJFbuu5BTuo=" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://media.istockphoto.com/id/854900142/photo/money-key-rupee.jpg?s=1024x1024&w=is&k=20&c=_R_6TZfT6CovpL8ax5F_lqwsI7vyR42MmcyHpSjMBaE=" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <div className="col-md-8" style={{ color: "#56429e", fontSize: "21px" }}>
            <div>
              <p>
                An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.

                It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.
              </p>
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={10000}>
                    <img src="https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=740&t=st=1710496052~exp=1710496652~hmac=fc6df5c21b71370864c511efe716c3ffbd70d6b239cf32e743102ffafde3d60b" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval={2000}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
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
