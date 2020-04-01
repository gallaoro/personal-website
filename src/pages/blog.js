import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import "../css/global.css"

const BlogHome = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
      return (
        <div key={edge.node.id} className="px-4 py-2 rounded border inline-block">
          <p><b>{edge.node.frontmatter.title}</b></p>
          <p className="text-gray-700">{edge.node.frontmatter.date}</p>
          <p className="pt-2 text-gray-500">{edge.node.excerpt}</p>
        </div>
      )
    })
  return (
    <>
    <SEO title="Home" />
    <div>
      <div className="container mx-auto px-6">
        <div className="pt-16">
          <h1 className="font-sans text-2xl sm:text-3xl font-bold text-gray-800 pb-4">Posts</h1>
          {Posts}
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogHome

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "D MMMM YYYY", locale: "it")
            path
            title
          }
        }
      }
    }
  }
`