import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const PortfolioElem = ({ data }) => {
  let { portfolio } = data.site.siteMetadata;
  const elems = portfolio.map(element => {
    return (
      <a title={element.name} alt={element.name} href={`${element.url}`} target="_blank" rel="noopener noreferrer">
        <div key={element.url} className="py-1 cursor-pointer flex items-center">
          <div className="underline mr-2">{element.name}</div>
          <svg fill="currentColor" width="20px" height="20px" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </div>
      </a>
    )
  })

  if (elems.length === 0) return null;

  return (
    <>
      <hr className="my-2" />
      <div className="text-black font-bold">Portfolio</div>
      {elems}
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        site {
          siteMetadata {
            portfolio {
              name
              url
            }
          }
        }
      }
    `}
    render={data => <PortfolioElem data={data} {...props} />}
  />
)
