import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const LatestPosts = ({ data }) => {
  let { nodes } = data.allMarkdownRemark;
  const posts = nodes.map(post => {
    return (
      <Link title={post.frontmatter.title} to={`${post.frontmatter.path}`}>
        <div key={post.frontmatter.path} className="py-1 cursor-pointer flex items-center">
          <div className="underline mr-2">{post.frontmatter.title}</div>
          <div>&rarr;</div>
        </div>
      </Link>
    )
  })

  if (posts.length === 0) return null;

  return (
    <>
      <hr className="my-2" />
      <div className="text-black font-bold">Blog</div>
      {posts}
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
          nodes {
            frontmatter {
              date(formatString: "YYYY-MM-DD", locale: "it")
              title
              path
            }
          }
        }
      }
    `}
    render={data => <LatestPosts data={data} {...props} />}
  />
)
