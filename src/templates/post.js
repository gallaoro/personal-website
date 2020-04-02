import React from "react"
import { graphql } from "gatsby"

import "../css/alternate_background.css"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="pt-16 h-screen" id="main-section-alternate">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-black">{frontmatter.title}</h1>
        <h2 className="text-xl text-gray-700 pb-16">{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "D MMMM YYYY", locale: "it")
        path
        title
      }
    }
  }
`