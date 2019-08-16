import React from "react"
import Layout from "../components/Layout"

import Head from "../components/Head"

const ContactPage = () => (
  <Layout>
    <Head title="Contact" />
    <div>
      <h3 className="font-semibold my-4">Contact Me</h3>
      <p className="capitalize">you can contact me via :</p>
      <div className="inline-flex text-4xl lg:py-4 md:py- py-2 ">
        <a href="/">
          {" "}
          <i className="fab fa-twitter text-blue-600 mr-5 "></i>
        </a>
        <a href="/">
          {" "}
          <i className="fab fa-instagram mr-5 text-pink-700 "></i>
        </a>
        <a href="/">
          {" "}
          <i className="fab fa-behance mr-5 text-blue-500 "></i>
        </a>
        <a href="/">
          {" "}
          <i className="fab fa-github mr-5 text-gray-800 "></i>
        </a>
      </div>
    </div>
  </Layout>
)

export default ContactPage
