import React from 'react'
import Layout from '../components/Layout/Layout'

function Contact() {
  return (
    <Layout title="Contact -ecomm">
      <div class="container">
        <h2 class="text-center m-3" style={{ color: "#a10a87" }}>Contact Us</h2>
        <div class="row d-flex">
            <iframe className='col-md-12 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749125013!2d77.30125893383428!3d12.954459539630076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710494904367!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div class="col-md-4 ml-3 mt-2 mb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="contact"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6 m-3">
            <div>
              <p>
                You can contact us through the following methods:
              </p>
              <ul>
                <li>Email: example@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address:Bangalore,karnataka,India</li>
              </ul>
              <p>
                We look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Contact