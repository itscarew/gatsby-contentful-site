import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="w-full  flex flex-col py-1 lg:py-5 md:py-3 ">
      <h1 className="font-bold lg:text-6xl md:text-6xl text-5xl my-3 lg:my-4 md:my-4">
        {data.site.siteMetadata.title}
      </h1>
      <div className="w-full">
        <ul className="inline-flex">
          <li className="mr-5 text-gray-600 hover:text-black ">
            <Link to="/" activeClassName="text-black">
              Home
            </Link>
          </li>
          <li className="mr-5 text-gray-600 hover:text-black ">
            <Link to="/about" activeClassName="text-black">
              About
            </Link>
          </li>
          <li className="mr-5 text-gray-600 hover:text-black ">
            <Link to="/blog" activeClassName="text-black">
              Blog
            </Link>
          </li>
          <li className="mr-5 text-gray-600 hover:text-black ">
            <Link to="/contact" activeClassName="text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
