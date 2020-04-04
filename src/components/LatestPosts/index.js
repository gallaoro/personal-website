import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const LatestPosts = ({ data }) => {
  let { nodes } = data.allMarkdownRemark;
  const posts = nodes.map(post => {
    return (
      <div key={post.frontmatter.path} className="py-1 cursor-pointer flex justify-between">
        <Link title={post.frontmatter.title} to={`${post.frontmatter.path}`}>
          <div className="underline">{post.frontmatter.title}</div>
        </Link>
      </div>
    )
  })

  if (posts.length === 0) return null;

  return (
    <>
      <hr className="my-2" />
      <div className="text-black font-bold">Latest Posts</div>
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
