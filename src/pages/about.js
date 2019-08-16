import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

import Head from "../components/Head"

const AboutPage = () => (
  <Layout>
    <Head title="About Me" />
    <div>
      <h3 className="font-semibold my-4">About me</h3>
      <h5>Put what you want people to know about you.</h5>
      <p className="capitalize my-4">
        Want to work with me?{" "}
        <Link className="text-purple-600 hover:text-purple-900 " to="/contact">
          {" "}
          Reach out{" "}
        </Link>
      </p>
    </div>
  </Layout>
)

export default AboutPage
