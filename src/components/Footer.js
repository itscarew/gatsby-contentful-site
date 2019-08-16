import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className="w-full my-8 lg:my-10 md:my-10">
      <p className="capitalize">
        Created By {data.site.siteMetadata.author} . AllRights Reserved, &copy;{" "}
        {new Date().getFullYear()}{" "}
      </p>
    </div>
  )
}

export default Footer
