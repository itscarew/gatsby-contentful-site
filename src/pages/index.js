import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import Head from "../components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <Link to="/about">
          <h2 className="font-semibold">Hello.</h2>
          <h3 className="capitalize lg:font-semibold md:font-semibold lg:text-4xl md:text-4xl text-2xl my-2 ">
            I'm "Your name", living in beautiful Lagos, nigeria
          </h3>
        </Link>
        <p className="capitalize my-3">
          Need a "ocupation" ?{" "}
          <Link
            to="/contact"
            className="text-purple-600 hover:text-purple-900 "
          >
            {" "}
            Contact me{" "}
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
