import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h2>Ooops.. Page Not Found</h2>
      <p>
        <Link to="/" className="text-gray-700">
          Head back to home
        </Link>
      </p>
    </Layout>
  )
}

export default NotFound
