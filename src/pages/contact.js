import React from "react"
import Layout from "../components/Layout"

import Head from "../components/Head"

const ContactPage = () => (
  <Layout>
    <Head title="Contact" />
    <div>
      <h3 className="font-semibold my-4">Contact Me</h3>
      <p className="capitalize">you can contact me via :</p>
      <div className="inline-flex lg:text-3xl md:text-3xl text-2xl lg:py-4 md:py- py-2 text-gray-800 hover:text-gray-900 ">
        <a href="/">
          <i className="fab fa-twitter mr-5 "></i>
        </a>
        <a href="/">
          <i className="fab fa-instagram mr-5  "></i>
        </a>
        <a href="/">
          <i className="fab fa-behance mr-5 "></i>
        </a>
        <a href="/">
          <i className="fab fa-github mr-5 "></i>
        </a>
      </div>
    </div>
  </Layout>
)

export default ContactPage
