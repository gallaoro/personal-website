import React from "react"
import { graphql } from "gatsby"

// import utils from '../misc/utils'

import "../css/global.css"
import "../css/alternate_background.css"
import "../css/markdownBlogPost.css"

export default function PostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="pt-16 min-h-screen" id="main-section-alternate">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-black">{frontmatter.title}</h1>
        <h2 className="text-xl text-gray-700 pb-16">{`${frontmatter.date}T00:00:00Z`}</h2>
        <div
          className="blog-post-content markdown pb-16"
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
        date(formatString: "YYYY-MM-DD", locale: "it")
        path
        title
      }
    }
  }
`