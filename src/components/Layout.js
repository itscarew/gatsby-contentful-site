import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.css"
import "../styles/custom.css"

const Layout = props => (
  <div className="w-5/6 lg:w-3/5 md:w-4/5 flex flex-col m-auto min-h-screen ">
    <div className="flex-grow ">
      <Header />
      <div className="py-4 lg:py-6 md:py-5 ">{props.children}</div>
    </div>
    <Footer />
  </div>
)

export default Layout
