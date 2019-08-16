import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

import Head from "../components/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <h3 className="font-semibold my-4">Blogs</h3>
        {data.allContentfulBlogPost.edges.map((blog, index) => {
          return (
            <div
              key={index}
              className="w-full py-2 lg:py-4 md:py-4 pl-4 hover:bg-gray-300 "
            >
              <Link to={`blog/${blog.node.slug}`}>
                <h3 className="capitalize italic ">{blog.node.title}</h3>
                <p className="text-gray-600 italic ">
                  {blog.node.publishedDate}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage
